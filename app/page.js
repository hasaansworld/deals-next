import '../styles/globals.css';
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftIcon, BookmarkIcon } from '@heroicons/react/24/outline';

export default function Page() {
	const repeatedContent = Array(10).fill(null);

	return (
		<>
			<div className="mt-6 flex flex-col items-center py-10">
				<div className="flex-1 overflow-y-auto">
					{repeatedContent.map((item, index) => (
						<div key={index} className="mt-3 min-h-[400px] w-[600px] rounded-lg border border-[#1a1a1a] bg-[#070707] p-4">
							<div className="flex gap-3">
								<img src="/loom.png" className="h-10 w-10 rounded-md border border-[#1a1a1a]" />
								<div className="grow">
									<div className="flex items-center gap-2">
										<p className="m-0 cursor-pointer font-semibold text-white hover:underline">Loom</p>
									</div>
									<div className="mt-2 flex items-center gap-2">
										<img src="/profile3.jpg" className="h-8 w-8 rounded-full border border-[#1a1a1a]" />
										<p className="m-0 cursor-pointer text-sm font-medium text-white/80 hover:underline">@calebporzio</p>
										<p className="m-0 text-sm text-white/50">12h</p>
									</div>
								</div>

								<EllipsisHorizontalIcon className="h-8 w-8 p-1.5 text-white/80" />
							</div>
							<div className="ml-14 mt-2">
								<p className="text-white">
									Today we're announcing that Loom got acquired by Atlassian for $975 million 🥳 Congratulations to the founders!
								</p>
								<img src="/feature.jpeg" className="mt-3 w-full rounded-lg" />
								<div className="mt-3 flex items-center justify-between">
									<HeartIcon className="h-8 w-8 p-1.5 text-white/80" />
									<ChatBubbleOvalLeftIcon className="h-8 w-8 scale-x-[-1] p-1.5 text-white/80" />
									<BookmarkIcon className="h-8 w-8 p-1.5 text-white/80" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
