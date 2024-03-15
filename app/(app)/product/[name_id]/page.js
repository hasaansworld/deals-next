import { getListingDetails, getRandomListings } from '@/lib/server';
import ProductListing from './product-listing';

export async function generateMetadata({ params }) {
	const { data } = await getListingDetails(params.name_id);
	return {
		title: `Appdeals - ${data.appName}`,
		openGraph: {
			images: [data.image1],
		},
	};
}

export default async function Product({ params }) {
	const { data: details } = await getListingDetails(params.name_id);
	const { data: random } = await getRandomListings(params.name_id);

	return <ProductListing listing={details} suggestions={random} />;
}
