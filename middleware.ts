import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  //const token = req.cookies.get("token")?.value; // Check auth token from cookies
  let userData:any = localStorage.getItem("userData");
  const token = JSON.parse(userData);
  console.log("token", token);
  const isAuthenticated = !!token; // Convert token to boolean
  const protectedRoutes = ["/dashboard", "/profile"];

  if (protectedRoutes.includes(req.nextUrl.pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect unauth users
  }

  return NextResponse.next(); // Continue if authenticated
}

// Apply middleware only to these routes
export const config = {
  matcher: ["/dashboard", "/profile"],
};
