import { getListingDetails, getRandomListings } from '@/lib/server';
import ProductListing from './product-listing';

export async function generateMetadata({ params }) {
	const { data } = await getListingDetails(params.name_id);

	const types = {
		lifetime: ' Lifetime',
		per_year: '/year',
		per_month: '/month',
		per_week: '/week',
		per_use: '/use',
	};

	let image = '';
	if (data.youtubeURL) {
		let youtubeId = '';
		if (data.youtubeURL.includes('youtube.')) {
			youtubeId = data.youtubeURL.split('v=')[1];
		} else if (data.youtubeURL.includes('youtu.be')) {
			let parts = data.youtubeURL.split('/');
			youtubeId = parts[parts.length - 1];
		}
		image = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
	} else if (data.image1 || data.image2 || data.image3) {
		image = data.image1 ? data.image1 : data.image2 ? data.image2 : data.image3;
	}

	const title = `${data.appName} on Appdeals - ${data.priceCurrency}${data.price}${types[data.type]}`;

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
		title,
		description: data.shortDescription,
		openGraph: {
			title,
			description: data.shortDescription,
			images: [{ url: image, alt: title }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			creator: '@appdeals_pro',
			description: data.shortDescription,
			images: [{ url: image, width: 1200, height: 630, alt: title }],
		},
	};
}

export default async function Product({ params }) {
	const { data: details } = await getListingDetails(params.name_id);
	const { data: random } = await getRandomListings(params.name_id);

	return <ProductListing listing={details} suggestions={random} />;
}
