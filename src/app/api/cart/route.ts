import { NextRequest, NextResponse } from "next/server";
import redis from "../../../../lib/redis";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, productId } = body;

  await redis.rpush(`cart:${username}`, productId);

  return NextResponse.json({ message: "Produit ajouté au panier ✅" });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { username } = body;

  await redis.rpop(`cart:${username}`);

  return NextResponse.json({ message: "Dernier produit retiré du panier ✅" });
}

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");

  if (!username)
    return NextResponse.json({ error: "Missing username" }, { status: 400 });

  const cart = await redis.lrange(`cart:${username}`, 0, -1);

  return NextResponse.json({ cart });
}
