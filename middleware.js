import { betterFetch } from "@better-fetch/fetch";
import { NextResponse } from "next/server";

export default async function authMiddleware(request) {
  const { data: session } = await betterFetch("/api/auth/get-session", {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get("cookie") || "",
    },
  });

  if (!session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));  //"/login"
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
