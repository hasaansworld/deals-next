import '../styles/globals.css';
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { brics, inter } from './fonts';

export default function Page() {
	const repeatedContent = Array(10).fill(null);

	return (
		<>
			<div className="mt-6 flex flex-col items-center bg-[#f7f7f7] py-10">
				<div className="flex-1 overflow-y-auto">
					<h2 className={`${brics.className} my-7 flex justify-center text-2xl font-bold text-black`}>
						Share your startup story
						<img className="ml-1 h-6 w-6 text-[#5100ff]" src="/star.svg" />
					</h2>
					<div className="mx-auto w-[450px]">
						{repeatedContent.map((item, index) => (
							<div class="mt-3 w-full cursor-pointer rounded-lg border border-[#efefef] bg-white p-3">
								<div class="flex items-center gap-3">
									<img src="/loom.png" alt="Loom logo" class="h-9 w-9 rounded-md shadow-md" />
									<div class="grow">
										<h4 class="font-bold text-black">Loom</h4>
										<p class="text-xs text-black/50">Productivity &bull; Communication</p>
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
								<img src={index % 2 == 0 ? '/loom-banner.png' : '/zapier-banner.png'} alt="Loom banner" class="mt-4 rounded-lg" />
								<div class="mt-4 flex items-center gap-1">
									<FaceSmileIcon className="h-5 w-5 text-black" />
									<div class="ml-3 flex items-center gap-0.5 rounded-full border border-[#eee] px-1.5 py-1">
										<img src="/heart.png" class="h-4 w-4" />
										<img src="/thumbs_up.png" class="h-4 w-4" />
										<img src="/clap.png" class="h-4 w-4" />
									</div>
									<p class="text-xs">15</p>
									<div class="grow"></div>
									<div class="mr-10 flex items-center gap-1">
										<ChatBubbleOvalLeftIcon className="h-5 w-5 text-black" />
										<p class="text-xs">15</p>
									</div>
									<BookmarkIcon className="h-5 w-5 text-black" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
