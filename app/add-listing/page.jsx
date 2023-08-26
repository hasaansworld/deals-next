import ActionButton from '../components/action-button/action-button';

export default function AddListing() {
	return (
		<div className="w-full overflow-auto px-60 py-20">
			<div className="flex w-full flex-col items-center">
				<h1 className="bg-gradient-to-r from-blue-600 to-fuchsia-500 bg-clip-text text-center text-[3rem] font-bold text-transparent">
					Let&apos;s Launch Your Startup Together
				</h1>
				<p className="text-xl font-medium text-gray-400">List your startup on the App Store to reach customers faster 🚀</p>
				<div className="mt-8">
					<ActionButton text="Create Listing" />
				</div>
				<div className="mt-12 h-[40rem] w-[60vw] rounded-xl border border-gray-200 shadow"></div>
			</div>
		</div>
	);
}
