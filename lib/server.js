import { headers } from 'next/headers';

export async function getUser() {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`);
}

export async function getAllListings(search) {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-listings${search ? `?q=${search}` : ''}`);
}

export async function getListingDetails(name_id) {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-listing/${name_id}`);
}

export async function getRandomListings() {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/random-listings`);
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
	return await res.json();
}
