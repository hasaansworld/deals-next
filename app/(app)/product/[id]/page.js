import { getListingDetails } from '@/lib/server';
import ProductListing from './product-listing';

export default async function Product({ params }) {
	const { data } = await getListingDetails(params.id);

	return <ProductListing listing={data} />;
}
