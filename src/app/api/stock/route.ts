import { NextRequest, NextResponse } from "next/server";
import redis from "../../../../lib/redis";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { productId, quantity } = body;

  await redis.set(`stock:product:${productId}`, quantity);

  return NextResponse.json({ message: "Stock initialisé ✅" });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { productId } = body;

  const stock = await redis.decr(`stock:product:${productId}`);

  return NextResponse.json({ newStock: stock });
}

export async function POST_TRANSACTION(req: NextRequest) {
  const body = await req.json();
  const { username, products } = body;

  const multi = redis.multi();

  products.forEach((productId: string) => {
    multi.decr(`stock:product:${productId}`);
    multi.rpush(`cart:${username}`, productId);
  });

  await multi.exec();

  return NextResponse.json({ message: "Transaction faite ✅" });
}
