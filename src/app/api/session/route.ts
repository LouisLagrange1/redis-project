import { NextRequest, NextResponse } from "next/server";
import redis from "../../../../lib/redis";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, email, role } = body;

  const session = { username, email, role };
  await redis.set(`session:${username}`, JSON.stringify(session), "EX", 1800); // 30 minutes

  return NextResponse.json({ message: "Session créée ✅" });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { username } = body;

  await redis.del(`session:${username}`);

  return NextResponse.json({ message: "Session supprimée ✅" });
}
