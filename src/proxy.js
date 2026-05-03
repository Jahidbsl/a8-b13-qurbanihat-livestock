import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    const url = request.nextUrl;
    if (
      url.pathname.startsWith("/all-animals") &&
      request.headers.get("user-agent")?.includes("vercel-screenshot")
    ) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my_profile", "/all-animals/:path*"],
};
