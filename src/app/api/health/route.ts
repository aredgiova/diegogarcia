import { NextResponse } from "next/server";
import { successResponse } from "@/types/api";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    successResponse({
      status: "ok",
      service: "web-api",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV ?? "unknown",
    }),
    { status: 200 }
  );
}
