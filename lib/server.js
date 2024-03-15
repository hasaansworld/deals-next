import { headers } from 'next/headers';
import axios from './axios';

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

export async function canSubmit() {
	return await getRequest(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/can-submit`);
}

async function getRequest(url) {
	// const res = await fetch(url, {
	// 	method: 'GET',
	// 	credentials: 'include',
	// 	headers: {
	// 		Cookie: headers().get('Cookie') || '',
	// 		origin: process.env.NEXT_PUBLIC_DOMAIN,
	// 		Accept: 'application/json',
	// 	},
	// });
	const { data } = await axios.get(url);
	return data;
}
