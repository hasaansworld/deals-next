import { headers } from 'next/headers';

export async function getUser() {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`);
}

export async function getAllListings() {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-listings`);
}

export async function getListingDetails(id) {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-listing/${id}`);
}

async function getRequest(url) {
	const res = await fetch(url, {
		method: 'GET',
		credentials: 'include',
		headers: {
			Cookie: headers().get('Cookie') || '',
			origin: 'http://localhost:3000',
			Accept: 'application/json',
		},
	});
	console.log(res);
	return await res.json();
}
