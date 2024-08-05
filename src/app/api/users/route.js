import { NextResponse } from "next/server";

export async function GET() {
  // Logic to fetch all Users
  const Users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ];
  return NextResponse.json(Users);
}
