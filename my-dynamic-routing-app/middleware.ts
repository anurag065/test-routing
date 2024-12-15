import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // If the path is "/", we show the home page as is.
  if (url.pathname === '/') {
    return NextResponse.next();
  }

  // For any other path like "/abc", we treat "abc" as an ID and rewrite to "/content/abc".
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments.length === 1) {
    const [contentId] = segments;
    url.pathname = `/content/${contentId}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
