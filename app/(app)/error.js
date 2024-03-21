'use client';

import Link from 'next/link';

export default function ErrorPage() {
	return (
		<div className="flex min-h-[90vh] w-full flex-col items-center justify-center px-6 py-40">
			<img src="/graphics/error_illustration.svg" className="h-60 w-60" alt="Two power cords disconnected" />
			<h1 className="mt-8 text-xl font-bold">Something Broke, But We&apos;re On It.</h1>
			<p className="text-lg text-neutral-600">Please check back soon while we fix it</p>
		</div>
	);
}
