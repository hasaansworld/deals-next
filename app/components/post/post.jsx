import { inter } from '../../fonts';
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

export default function Post({ index }) {
	const appIcon = index % 2 == 0 ? '/loom.png' : '/zapier-logomark.svg';
	const appName = index % 2 == 0 ? 'Loom' : 'Zapier';
	const postText =
		index % 2 == 0
			? "Don't miss out on top seasonal talent to help you reach your year-end goals this holiday season because you were late to the game."
			: 'Build automated workflows customized for your role and business.';
	const postImage = index % 2 == 0 ? '/post-1.jpeg' : '/post-2.jpeg';
	const commentText =
		'Ever wondered how to turn your lettering into a working font? Join us as we host Francis Chouquet @Fran6 in this free online talk to chat about his work and how he creates his amazing fonts!';

	return (
		<div className="mt-3 w-full cursor-pointer rounded-lg border border-[#eee] bg-white">
			<div className="w-full cursor-pointer rounded-lg p-3">
				<div className="flex items-center gap-3">
					<img src={appIcon} alt="Loom logo" className="h-10 w-10 rounded-md" />
					<div className="grow">
						<h4 className="font-bold text-black">{appName}</h4>
						<p className={`${inter.className} text-xs font-medium text-black/60`}>Productivity, Communication</p>
					</div>

					<button
						class={`${inter.className} rounded-lg bg-[#5100ff]/5 px-3 py-0.5 text-sm font-medium text-[#5100ff] hover:bg-[#5100ff] hover:text-white`}
					>
						Follow
					</button>
					<EllipsisHorizontalIcon className="h-6 w-6 text-black" />
				</div>
				<p class={`${inter.className} mt-4 leading-tight text-black`}>{postText}</p>
				<img src={postImage} alt="Loom banner" className="mt-3 rounded-lg" />
				<div className="mt-3 flex items-center justify-between gap-1 px-1">
					<div className="flex items-center gap-8">
						<HeartIcon className="h-5 w-5" />
						<ChatBubbleOvalLeftIcon className="h-5 w-5" />
						<ArrowPathIcon className="h-5 w-5" />
						<p className="text-sm font-medium text-[#777]">15 likes</p>
						<p className="text-sm font-medium text-[#777]">6 replies</p>
					</div>

					{/* <div className="flex items-center gap-6 px-3 text-[#777]"></div> */}
					{/* <div className="flex items-center gap-2">
						<HeartIcon className="h-5 w-5" />
						<p className="text-xs">15</p>
					</div>
					<div className="flex items-center gap-2">
						<ChatBubbleOvalLeftIcon className="h-5 w-5" />
						<p className="text-xs">15</p>
					</div>
					<div className="flex items-center gap-2">
						<ArrowPathIcon className="h-5 w-5" />
						<p className="text-xs">15</p>
					</div> */}
					<BookmarkIcon className="h-5 w-5" />
				</div>
			</div>
			{false && (
				<div className="border-t border-[#eee] p-3">
					<div className="flex items-center gap-3">
						<img src="profile3.jpg" className="h-8 w-8 rounded-full" />
						<div className="flex grow items-center gap-2">
							<h4 className="font-semibold text-black">@aiden_markaram</h4>
							<p className={`${inter.className} text-xs font-medium text-black/60`}>15m ago</p>
						</div>
						<EllipsisHorizontalIcon className="h-6 w-6 text-black" />
					</div>
					<p class={`${inter.className} ml-11 leading-tight text-black`}>{commentText}</p>

					<div className="ml-11 mt-3 flex items-center gap-8">
						<HeartIcon className="h-5 w-5 shrink-0" />
						<ChatBubbleOvalLeftIcon className="h-5 w-5" />
						<div className="flex items-center gap-6 text-[#777]">
							<p className="text-sm font-medium">15 likes</p>
							<p className="text-sm font-medium">6 replies</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
