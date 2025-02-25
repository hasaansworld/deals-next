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
	try {
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

		// Log the response status and headers for debugging
		console.log(`API Response Status: ${res.status} ${res.statusText}`);
		console.log(`Content-Type: ${res.headers.get('content-type')}`);

		// Clone the response to get both text and JSON (if applicable)
		const resClone = res.clone();

		// Check if response is OK (status 200-299)
		if (!res.ok) {
			// Try to get the error response text
			const errorText = await resClone.text();
			console.error(`API Error (${res.status}):`, errorText);
			throw new Error(`API request failed with status ${res.status}`);
		}

		// Check content type to ensure we're getting JSON
		const contentType = res.headers.get('content-type');
		if (!contentType || !contentType.includes('application/json')) {
			const responseText = await resClone.text();
			console.error('Expected JSON but received:', responseText.substring(0, 500) + '...');
			throw new Error('Response is not JSON');
		}

		// Parse JSON
		const data = await res.json();

		// Log a sample of the data for debugging
		console.log('API Response Data (sample):', JSON.stringify(data).substring(0, 200) + (JSON.stringify(data).length > 200 ? '...' : ''));

		return data;
	} catch (error) {
		console.error(`Failed to fetch data from ${url}:`, error);
		// You can choose to return a default value or rethrow the error
		// Returning a default value allows the app to continue
		return {
			error: true,
			message: error.message,
			data: [],
		};
	}
}
