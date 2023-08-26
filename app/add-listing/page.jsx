import ActionButton from '../components/action-button/action-button';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import FlatButton from '../components/action-button/flat-button';
import Image from 'next/image';

export default function AddListing() {
	return (
		<div className="w-full overflow-auto py-32">
			<div className="w-6/7 3xl:w-1/2 mx-auto flex flex-col items-center lg:w-5/6 xl:w-3/5">
				<h1 className="bg-gradient-to-r from-blue-600 to-fuchsia-500 bg-clip-text text-center text-[3rem] font-bold leading-tight text-transparent">
					Let&apos;s Launch Your Startup Together
				</h1>
				<p className="text-center text-xl font-medium text-gray-400">List your startup on the App Store to reach customers faster 🚀</p>
				<div className="mt-8">
					<ActionButton text="Create Listing" endIcon={<ArrowRightIcon className="h-5 w-5" />} />
				</div>

				<div className="mt-20 flex w-full items-center gap-20">
					<Image
						src="/add-listing/magnifying_glass.png"
						width={400}
						height={400}
						className="h-72 w-72 shrink-0 rounded-3xl shadow-lg"
						alt="Magnifying glass"
					/>
					<div>
						<h3 className="text-3xl font-semibold">Get Discovered</h3>
						<p className="mb-2 mt-3 text-xl text-gray-400">
							You&apos;ve built a great product but people need to know about it. Get discovered by people looking for great new products like
							yours.
						</p>
						<div className="-ml-2">
							<FlatButton text="Create Listing" endIcon={<ChevronRightIcon className="mt-0.5 h-5 w-5" />} />
						</div>
					</div>
				</div>

				<div className="mt-10 flex w-full items-center gap-20">
					<div>
						<h3 className="text-3xl font-semibold">Be In The Spotlight</h3>
						<p className="mb-2 mt-3 text-xl text-gray-400">
							We have dedicated spaces that feature up and coming products so you have a chance to compete with the established brands.
						</p>
						<div className="-ml-2">
							<FlatButton text="Create Listing" endIcon={<ChevronRightIcon className="mt-0.5 h-5 w-5" />} />
						</div>
					</div>
					<Image src="/add-listing/diamond.png" width={400} height={400} className="h-72 w-72 shrink-0 rounded-3xl shadow-lg" alt="Diamond" />
				</div>

				<div className="mt-10 flex w-full items-center gap-20">
					<Image src="/add-listing/star.png" width={400} height={400} className="h-72 w-72 shrink-0 rounded-3xl shadow-lg" alt="Golden star" />
					<div>
						<h3 className="text-3xl font-semibold">Collect Feedback</h3>
						<p className="mb-2 mt-3 text-xl text-gray-400">
							Effortlessly gather valuable feedback from your users. Gain insights, identify areas for improvement, and connect with your
							audience.
						</p>
						<div className="-ml-2">
							<FlatButton text="Create Listing" endIcon={<ChevronRightIcon className="mt-0.5 h-5 w-5" />} />
						</div>
					</div>
				</div>

				<div className="mt-10 flex w-full items-center gap-20">
					<div>
						<h3 className="text-3xl font-semibold">Grow Together</h3>
						<p className="mb-2 mt-3 text-xl text-gray-400">
							Growing a start-up alone can be hard but we&apos;re here for you. Get the AppStore community to spread the word and grow faster.
						</p>
						<div className="-ml-2">
							<FlatButton text="Create Listing" endIcon={<ChevronRightIcon className="mt-0.5 h-5 w-5" />} />
						</div>
					</div>
					<Image src="/add-listing/bus.png" width={400} height={400} className="h-72 w-72 shrink-0 rounded-3xl shadow-lg" alt="Discount tags" />
				</div>
			</div>
		</div>
	);
}
