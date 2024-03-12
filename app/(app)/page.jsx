import { brics, inter } from '@/app/fonts';
import Post from '@/components/post/post';
import Listing from '@/components/listing/listing';
import { getAllListings } from '@/lib/server';

export default async function Page() {
	const allListings = await getAllListings();
	console.log(allListings);

	return (
		<>
			<div className="flex w-full flex-col items-center px-10 py-10">
				<h2 className={`mt-16 flex justify-center text-2xl font-bold text-black`}>Best Software Deals And Discounts</h2>
				<p className="mb-14 text-gray-500">Get high quality software for lower prices.</p>

				<div className="grid grid-cols-5 gap-6">
					{allListings.data.map((listing, index) => (
						<Listing listing={listing} key={listing.id} />
					))}
				</div>
			</div>
		</>
	);
}
