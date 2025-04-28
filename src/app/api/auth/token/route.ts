import { NextRequest, NextResponse } from "next/server";
import redis from "../../../../../lib/redis";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { token, username } = body;

  // Expiration de 2 heures = 7200 secondes
  await redis.set(`auth:token:${token}`, username, "EX", 7200);

  return NextResponse.json({ message: "Token créé ✅" });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { token } = body;

  await redis.del(`auth:token:${token}`);

  return NextResponse.json({ message: "Token supprimé ✅" });
}
