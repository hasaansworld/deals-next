import { brics, inter } from '@/app/fonts';
import Post from '@/components/post/post';
import Listing from '@/components/listing/listing';
import { getAllListings } from '@/lib/server';
import Link from 'next/link';
import ArrowRight02Icon from '@/components/icons/arrow_right';

export default async function Page({ searchParams }) {
	const search = searchParams?.q;
	const allListings = await getAllListings(search);

	return (
		<>
			<div className="flex w-full flex-col items-center px-4 py-10 md:px-10">
				<h1 className={`mx-6 mt-16 flex justify-center text-center text-xl font-bold text-black md:mx-16 md:text-2xl`}>
					{search ? `Search for "${search}"` : 'Best Software Deals And Discounts'}
				</h1>
				<p className="mx-4 mb-14 text-gray-400 md:text-lg">
					{search
						? `${allListings.data.length} ${allListings.data.length === 1 ? 'deal' : 'deals'} found matching your query`
						: 'Get high quality software for lower prices.'}
				</p>

				<div className="flex flex-col gap-6 md:grid md:auto-rows-max md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
					{allListings.data.length > 0 && allListings.data.map((listing, index) => <Listing listing={listing} key={listing.id} />)}
				</div>

				<div className="mx-auto mt-16 flex w-full flex-col items-center rounded-xl bg-neutral-100 px-4 py-6 md:w-[600px] md:px-8">
					<h2 className="w-full text-center text-xl font-bold">👋 Hello! Are you a maker? Add your deal on Appdeals!</h2>
					<p className="text-center text-lg">
						Appdeals just launched and we&apos;re looking to add amazing deals from apps like yours. List your deals for free and let&apos;s grow
						togther.
					</p>
					<Link href={'/submit'} className="mx-auto mt-2 flex items-center gap-2 text-xl font-semibold text-fuchsia-500 hover:text-fuchsia-400">
						List My Deal On Appdeals
						<ArrowRight02Icon className="h-6 w-6" stroke="2.5" />
					</Link>
				</div>
			</div>
		</>
	);
}
