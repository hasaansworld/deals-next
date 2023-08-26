import ActionButton from '../components/action-button/action-button';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import FlatButton from '../components/action-button/flat-button';

export default function AddListing() {
	return (
		<div className="w-full overflow-auto py-32">
			<div className="flex w-1/2 mx-auto flex-col items-center">
				<h1 className="bg-gradient-to-r from-blue-600 to-fuchsia-500 bg-clip-text text-center text-[3rem] font-bold text-transparent">
					Let&apos;s Launch Your Startup Together
				</h1>
				<p className="text-xl font-medium text-gray-400">List your startup on the App Store to reach customers faster 🚀</p>
				<div className="mt-8">
					<ActionButton text="Create Listing" endIcon={<ArrowRightIcon className='w-5 h-5' />} />
				</div>
				<div className='flex w-full items-center gap-20 mt-28'>
					<div className='w-72 h-72 shadow rounded-3xl shrink-0 border border-gray-100'>

					</div>
					<div>
						<h3 className='text-3xl font-semibold'>Get Discovered</h3>
						<p className='text-xl text-gray-400 mt-5 mb-2'>You&apos;ve built a great product but people need to know about it. We will help you get discovered by people looking for products like yours.</p>

						<FlatButton text="Create Listing" endIcon={<ChevronRightIcon className='w-5 h-5' />} />
					</div>
				</div>

				<div className='flex w-full items-center gap-20 mt-28'>
					<div>
						<h3 className='text-3xl font-semibold'>Stay In The Spotlight</h3>
						<p className='text-xl text-gray-400 mt-5 mb-2'>We have dedicated spaces where we feature up and coming products that users will love. Stay in the spotlight long after the launch.</p>
						<FlatButton text="Create Listing" endIcon={<ChevronRightIcon className='w-5 h-5' />} />
					</div>
					<div className='w-72 h-72 shadow rounded-3xl shrink-0 border border-gray-100'>

					</div>
				</div>
				
			</div>
		</div>
	);
}
