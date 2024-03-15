import Link from 'next/link';
import NewTwitterIcon from '@/components/icons/new_twitter';
import { canSubmit, getUser } from '@/lib/server';
import ListingForm from './listing-form';
import TimeQuarterPassIcon from '@/components/icons/time_quarter_pass';

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic';

export default async function NewListing() {
	const user = await getUser();

	if (user && user.id) {
		const { userCanSubmit } = await canSubmit();

		if (!userCanSubmit) {
			return (
				<div className="flex h-[90vh] w-full flex-col items-center justify-center px-4 py-40">
					<TimeQuarterPassIcon className="h-10 w-10 text-rose-600" stroke="2" />
					<h2 className="mt-8 text-2xl font-bold">Daily Submission Limit Reached</h2>
					<p className="mx-4 mt-2 w-full text-center text-lg text-neutral-600 md:mx-0 md:w-[400px]">
						Currently, you can only submit one deal per day but we&apos;re working hard to increase this limit. Please check back tomorrow to add
						another deal.
					</p>
				</div>
			);
		}

		return <ListingForm user={user} />;
	}

	return (
		<div className="flex h-full w-full flex-col items-center justify-center py-40">
			<h1 className="text-2xl font-bold text-black">New Listing</h1>
			<p className="mt-1 text-center text-lg text-neutral-600">Please connect one of the following accounts to get started</p>
			<div className="mt-6 w-80">
				<div className="flex w-full items-center gap-5">
					<Link
						href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/google`}
						className="mt-6 flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-4 font-medium text-black shadow-sm hover:bg-neutral-100"
					>
						<img src="/google_logo.svg" alt="Google Logo" className="h-7 w-7" />
					</Link>
					<Link
						href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/twitter`}
						className="mt-6 flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-4 font-medium text-black shadow-sm hover:bg-neutral-100"
					>
						<NewTwitterIcon className="h-7 w-7 text-black" stroke="2" />
					</Link>
				</div>
			</div>
		</div>
	);
}
