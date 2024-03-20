import { headers } from 'next/headers';

export async function getUser() {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`);
}

export async function getAllListings(search) {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-listings${search ? `?q=${search}` : ''}`);
}

export async function getListingDetails(name_id, cache = true) {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-listing/${name_id}`, cache);
}

export async function getRandomListings(name_id) {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/random-listings?exclude=${name_id}`);
}

export async function getUsersListings() {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-listings`);
}

export async function canSubmit() {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/can-submit`);
}

async function getRequest(url, cache = true) {
	const res = await fetch(url, {
		method: 'GET',
		credentials: 'include',
		headers: {
			Cookie: headers().get('Cookie') || '',
			origin: process.env.NEXT_PUBLIC_DOMAIN,
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
		},
		cache: cache ? 'default' : 'no-store',
	});
	return await res.json();
}
