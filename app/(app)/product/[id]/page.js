import { getListingDetails, getRandomListings } from '@/lib/server';
import ProductListing from './product-listing';

export default async function Product({ params }) {
	const { data: details } = await getListingDetails(params.id);
	const { data: random } = await getRandomListings();
	console.log(random);

	return <ProductListing listing={details} suggestions={random} />;
}
