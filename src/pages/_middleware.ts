import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Force dynamic rendering for all routes
  const response = NextResponse.next()

  // Add headers to prevent static caching
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
  response.headers.set('Pragma', 'no-cache')
  response.headers.set('Expires', '0')

  return response
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
