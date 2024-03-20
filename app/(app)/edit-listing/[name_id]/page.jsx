import { getListingDetails, getUser } from '@/lib/server';
import { redirect } from 'next/navigation';

export default async function EditListing({ params }) {
	const user = await getUser();
	if (!user || !user.id) {
		redirect('/');
	}
	const { data: listing } = await getListingDetails(params.name_id);
	if (listing.userId !== user.id) {
		redirect('/');
	}

	return <div>Edit</div>;
}
