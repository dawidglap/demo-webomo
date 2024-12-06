import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// Define locales and default fallback locale
const locales = ["en", "de", "it", "fr", "es", "pt"];
const fallbackLocale = "de"; // Use German as the default fallback
const localePrefix = "always"; // 'always', 'as-needed', or 'never'

// Function to determine the default locale based on the user's system settings
function getDefaultLocale(req: NextRequest): string {
  const acceptLanguage = req.headers.get("accept-language");
  if (acceptLanguage) {
    // Extract the first preferred language from the header
    const preferredLocale = acceptLanguage
      .split(",")[0] // Take the first language
      .split("-")[0] // Normalize (e.g., "en-US" to "en")
      .toLowerCase();

    // Return the matched locale or fallback to German
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }
  return fallbackLocale; // Use fallback if no match
}

// Configure next-intl middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: fallbackLocale, // Set fallback in intl config
  localePrefix,
});

// Paths to exclude from middleware
const excludedPaths = ["/api", "/_next", "/images", "/favicon.ico", "/404"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip excluded paths
  if (excludedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Handle `/404` and `/404.html` directly
  if (pathname === "/404" || pathname === "/404.html") {
    return NextResponse.next();
  }

  // Redirect `/` to the default locale dynamically
  if (pathname === "/") {
    const userLocale = getDefaultLocale(req);
    const url = new URL(`/${userLocale}`, req.url);
    return NextResponse.redirect(url);
  }

  // Apply intl middleware for locale-prefixed paths
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/:locale/:path*", "/"], // Match locale-prefixed paths and the root
};
