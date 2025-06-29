import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const middleware = async (request) => {
  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
  const pathname = request.nextUrl.pathname;

  if (pathname.includes("/api")) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL(`/signin?redirect=${pathname}`, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/bookrepair/:path*", "/trackbook/:path*"],
};
