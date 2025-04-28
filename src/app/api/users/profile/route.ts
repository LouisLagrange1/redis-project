import { NextRequest, NextResponse } from "next/server";
import redis from "../../../../../lib/redis";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id, name, email, city } = body;

  await redis.hset(`user:${id}`, {
    name,
    email,
    city,
  });

  return NextResponse.json({ message: "Profil créé ✅" });
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id)
    return NextResponse.json({ error: "Missing user id" }, { status: 400 });

  const user = await redis.hgetall(`user:${id}`);

  return NextResponse.json({ user });
}
