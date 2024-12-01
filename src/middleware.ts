import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// Define locales and default locale for the app
const locales = ["en", "de", "it", "fr", "es", "pt"];
const defaultLocale = "de";
const localePrefix = "always"; // 'always', 'as-needed', or 'never'

// Configure next-intl middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

// Exclude paths that should not be processed by next-intl
const excludedPaths = ["/api", "/_next", "/images", "/favicon.ico"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip excluded paths
  if (excludedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Redirect `/` to the default locale
  if (pathname === "/") {
    const url = new URL(`/${defaultLocale}`, req.url);
    return NextResponse.redirect(url);
  }

  // Apply next-intl middleware for other paths
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/:locale/:path*", "/"], // Matches locale-prefixed paths and root
};
