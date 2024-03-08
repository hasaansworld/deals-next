import { headers } from 'next/headers';

export default async function getUser() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			Cookie: headers().get('Cookie') || '',
			origin: 'http://localhost:3000',
			Accept: 'application/json',
		},
	});
	return await res.json();
}
