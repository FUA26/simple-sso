import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/auth/login" || path === "/api/login" || path === "/api/register";
  const isApiRoute = path.startsWith("/api");

  const token = request.cookies.get("token")?.value || "";
  const authHeader = request.headers.get("Authorization") || "";
  const bearerToken = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  // Handle API routes
  if (isApiRoute) {
    // Allow public API routes without Bearer token
    if (isPublicPath) {
      return NextResponse.next();
    }

    // Secure other API routes with Bearer token
    if (!bearerToken) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    // You could add further validation for the Bearer token here if needed
    return NextResponse.next();
  }

  // Handle non-API routes with cookie-based authentication
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/profile",
    "/auth/login",
    "/signup",
    "/verifyemail",
    "/api/:path*",
  ],
};
