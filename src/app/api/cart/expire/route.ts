import { NextRequest, NextResponse } from "next/server";
import redis from "../../../../../lib/redis";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username } = body;

  await redis.expire(`cart:${username}`, 900); // 15 minutes

  return NextResponse.json({ message: "Expiration définie ✅" });
}

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");

  if (!username)
    return NextResponse.json({ error: "Missing username" }, { status: 400 });

  const ttl = await redis.ttl(`cart:${username}`);

  return NextResponse.json({ ttl });
}
