'use client';
export default function NotFound() {
	return (
		<div className="flex h-[80vh] w-full flex-col items-center justify-center">
			<h1 className="text-4xl font-bold">404</h1>
			<p className="mt-3 text-center text-xl font-medium">
				We couldn&apos;t find this product.
				<br />
				Please try something else.
			</p>
		</div>
	);
}
