import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export async function proxy(req) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/all-animals/:path*"],
};
