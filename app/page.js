import '../styles/globals.css';
import {
	EllipsisHorizontalIcon,
	HeartIcon,
	ChatBubbleOvalLeftIcon,
	BookmarkIcon,
	FaceSmileIcon,
	ArrowPathIcon,
	ChatBubbleLeftIcon,
	PlusIcon,
	PlusSmallIcon,
	ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { brics, inter } from './fonts';

export default function Page() {
	const repeatedContent = Array(10).fill(null);

	return (
		<>
			<div className="mt-6 flex flex-col items-center py-10">
				<div className="flex-1 overflow-y-auto">
					<h2 className={`${brics.className} my-7 flex justify-center text-2xl font-bold text-black`}>
						Share your startup story
						<img className="ml-1 h-6 w-6 text-[#5100ff]" src="/star.svg" />
					</h2>
					<div className="mx-auto w-[450px]">
						{repeatedContent.map((item, index) => (
							<div className="mt-3 w-full cursor-pointer rounded-lg border border-[#efefef] bg-white p-3 shadow-sm">
								<div className="flex items-center gap-3">
									<img src={index % 2 == 0 ? '/loom.png' : 'zapier-logomark.svg'} alt="Loom logo" className="h-9 w-9 rounded-md shadow-md" />
									<div className="grow">
										<h4 className="font-bold text-black">{index % 2 == 0 ? 'Loom' : 'Zapier'}</h4>
										<p className="text-xs text-black/50">Productivity &bull; Communication</p>
									</div>

									<button
										class={`${inter.className} rounded-lg bg-[#5100ff]/5 px-3 py-0.5 text-sm font-medium text-[#5100ff] hover:bg-[#5100ff] hover:text-white`}
									>
										Follow
									</button>
									<EllipsisHorizontalIcon className="h-6 w-6 text-black" />
								</div>
								<p class={`${inter.className} mt-4 text-sm font-medium leading-tight text-black`}>
									Easily record and share AI-powered video messages
								</p>
								<img src={index % 2 == 0 ? '/loom-banner.png' : '/zapier-banner.png'} alt="Loom banner" className="mt-4 rounded-lg" />
								<div className="mt-4 flex items-center justify-between gap-1 text-[#555]">
									{/* <div className="flex items-center gap-1">
										<HeartIcon className="h-5 w-5" />
										<p className="text-xs">15</p>
									</div> */}
									<div className="flex items-center">
										<div className="flex items-center gap-1 rounded-full border border-[#eee]">
											<HeartIcon className="h-7 w-9 cursor-pointer rounded-full px-2 py-1 text-black hover:bg-[#eee]" />
											<PlusSmallIcon className="h-7 w-9 cursor-pointer rounded-full px-2 py-1 text-black hover:bg-[#eee]" />
										</div>
										<div className="ml-5 flex items-center gap-0.5 rounded-full border border-[#eee] px-1.5 py-1">
											<img src="/heart.png" className="h-5 w-5" />
											<img src="/thumbs_up.png" className="h-5 w-5" />
											<img src="/clap.png" className="h-5 w-5" />
										</div>
										<p className="ml-1 text-xs">15</p>
									</div>

									{/* <div className="grow"></div> */}
									<div className="flex items-center gap-8">
										{/* <div className="ml-6 flex items-center gap-1"> */}
										{/* <ChatBubbleOvalLeftIcon className="h-5 w-5 text-black" /> */}
										{/* <p className="text-xs">15</p>
									</div> */}
										{/* <div className="flex items-center gap-1">
										<ArrowPathIcon className="h-5 w-5" />
										<p className="text-xs">15</p>
									</div> */}
										<ArrowPathIcon className="h-5 w-5 text-black" />
										<BookmarkIcon className="h-5 w-5 text-black" />
									</div>
								</div>
								<div className="mt-4 flex items-center gap-6">
									<p className={`${inter.className} text-xs text-[#777]`}>15 Comments</p>
									{/* <p className="font-medium text-[#777]">&bull;</p> */}
									<p className={`${inter.className}font-inter text-xs text-[#777]`}>6 Shares</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
