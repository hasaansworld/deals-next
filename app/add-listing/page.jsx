import ActionButton from '../components/action-button/action-button';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import FlatButton from '../components/action-button/flat-button';

export default function AddListing() {
	return (
		<div className="w-full overflow-auto py-32">
			<div className="w-6/7 3xl:w-1/2 mx-auto flex flex-col items-center lg:w-5/6 2xl:w-3/5">
				<h1 className="bg-gradient-to-r from-blue-600 to-fuchsia-500 bg-clip-text text-center text-[3rem] font-bold leading-tight text-transparent">
					Let&apos;s Launch Your Startup Together
				</h1>
				<p className="text-center text-xl font-medium text-gray-400">List your startup on the App Store to reach customers faster 🚀</p>
				<div className="mt-8">
					<ActionButton text="Create Listing" endIcon={<ArrowRightIcon className="h-5 w-5" />} />
				</div>
				<div className="mt-28 flex w-full items-center gap-20">
					<div className="h-72 w-72 shrink-0 rounded-3xl border border-gray-100 shadow"></div>
					<div>
						<h3 className="text-3xl font-semibold">Get Discovered</h3>
						<p className="mb-2 mt-3 text-xl text-gray-400">
							You&apos;ve built a great product but people need to know about it. We will help you get discovered by people looking for products
							like yours.
						</p>

						<FlatButton text="Create Listing" endIcon={<ChevronRightIcon className="h-5 w-5" />} />
					</div>
				</div>

				<div className="mt-28 flex w-full items-center gap-20">
					<div>
						<h3 className="text-3xl font-semibold">Stay In The Spotlight</h3>
						<p className="mb-2 mt-3 text-xl text-gray-400">
							We have dedicated spaces where we feature up and coming products that users will love. Stay in the spotlight long after the launch.
						</p>
						<FlatButton text="Create Listing" endIcon={<ChevronRightIcon className="h-5 w-5" />} />
					</div>
					<div className="h-72 w-72 shrink-0 rounded-3xl border border-gray-100 shadow"></div>
				</div>
			</div>
		</div>
	);
}
