// import { NextResponse } from 'next/server';
// import getUser from '@/lib/server';

// export async function middleware(request) {
// 	const pathName = request.nextUrl.pathname;

// 	const user = await getUser();

// 	if (pathName.startsWith('/login') || pathName.startsWith('/signup')) {
// 		if (user && !user.message) return NextResponse.redirect(new URL('/', request.url));
// 	}

// 	if (request.nextUrl.pathname.startsWith('/new-listing')) {
// 		if (user && user.message) return NextResponse.redirect(new URL('/signup', request.url));
// 	}
// }

// export const config = {
// 	matcher: ['/login/:path*', '/signup/:path*', '/new-listing/:path*'],
// };
