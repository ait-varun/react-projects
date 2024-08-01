import { NextResponse } from "next/server";

export async function GET() {
  // Logic to fetch all DATA
  const DATA = [
    { id: 1, title: "DATA 1" },
    { id: 2, title: "DATA 2" },
  ];
  return NextResponse.json(DATA);
}

export async function POST(request) {
  // Logic to create a new blog
  return NextResponse.json({ message: "CREATED" }, { status: 201 });
}
