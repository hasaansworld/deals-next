import { getListingDetails, getUser } from '@/lib/server';
import { notFound, redirect } from 'next/navigation';
import ListingForm from '@/app/(app)/new-listing/listing-form';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function EditListing({ params }) {
	const user = await getUser();
	if (!user || !user.id) redirect('/');

	const { data: listing } = await getListingDetails(params.name_id, false);
	if (!listing) notFound();

	return <ListingForm user={user} edit listing={listing} />;
}
