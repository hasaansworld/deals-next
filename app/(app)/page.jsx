import { brics, inter } from '@/app/fonts';
import Post from '@/components/post/post';
import Listing from '@/components/listing/listing';
import { getAllListings } from '@/lib/server';

export default async function Page({ searchParams }) {
	const search = searchParams?.q;
	const allListings = await getAllListings(search);
	console.log(allListings);

	return (
		<>
			<div className="flex w-full flex-col items-center px-4 py-10 md:px-10">
				<h2 className={`mx-6 mt-16 flex justify-center text-center text-xl font-bold text-black md:mx-16 md:text-2xl`}>
					{search ? `Search for "${search}"` : 'Best Software Deals And Discounts'}
				</h2>
				<p className="mx-4 mb-14 text-gray-400 md:text-lg">
					{search
						? `${allListings.data.length} ${allListings.data.length === 1 ? 'deal' : 'deals'} found matching your query`
						: 'Get high quality software for lower prices.'}
				</p>

				<div className="flex flex-col gap-6 md:grid md:auto-rows-max md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
					{allListings.data.length > 0 && allListings.data.map((listing, index) => <Listing listing={listing} key={listing.id} />)}
				</div>
			</div>
		</>
	);
}
