export async function GET() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings-count`, {
		headers: {
			'Content-Type': 'application/json',
			Origin: process.env.NEXT_PUBLIC_DOMAIN,
			Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
		},
	});
	const data = await res.json();

	return Response.json(data);
}
