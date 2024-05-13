import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const DB = getRequestContext().env.DB;
  console.log("DB: ", DB);

  const result = await DB.prepare("SELECT * FROM experiences").run();

  return new NextResponse(JSON.stringify(result));
}
