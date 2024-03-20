import ArrowRight02Icon from '@/components/icons/arrow_right';
import Sad01Icon from '@/components/icons/sad';
import { getUser, getUsersListings } from '@/lib/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ListingsTable from './listings-table';

export default async function ManageListings() {
	const user = await getUser();
	if (!user || !user.id) {
		redirect('/');
	}

	const { data: listings } = await getUsersListings();

	return (
		<div className="h-full w-full px-4 pb-40 pt-32 md:px-0">
			<div className="w-full md:mx-auto md:w-[800px]">
				<div className="w-full">
					<h1 className="text-2xl font-bold text-black">My Deals</h1>
					{!listings || listings.length === 0 ? (
						<div className="mt-8 flex flex-col items-center rounded-xl border-2 border-dashed border-fuchsia-200 px-4 py-24 md:px-16">
							<Sad01Icon className="h-16 w-16" stroke="1" />
							<p className="mt-4 text-center text-lg">
								You haven&apos;t added any deals yet
								<br />
								Your deal submissions will show up here.
							</p>
							<Link
								href="/new-listing"
								className="mt-8 flex items-center gap-1 rounded-full bg-fuchsia-500 px-8 py-2 font-medium text-white hover:ring-4 hover:ring-fuchsia-200"
							>
								Submit <ArrowRight02Icon className="h-5 w-5" stroke="2" />
							</Link>
						</div>
					) : (
						<div className="mt-8">
							<ListingsTable allListings={listings} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
