import { inter } from '../../fonts';
import { Bookmark02Icon, Comment01Icon, FavouriteIcon, MoreHorizontalIcon } from '@hugeicons/react-pro';
import Comment02Icon from '../icons/comment';
import BubbleChatIcon from '../icons/bubble_chat';

export default function Post({ index }) {
	const appIcon = index % 2 == 0 ? '/loom.png' : '/zapier-logomark.svg';
	const appName = index % 2 == 0 ? 'Loom' : 'Zapier';
	const personName = index % 2 == 0 ? 'Hasaan Ahmed' : 'Orman Clark';
	const postText =
		index % 2 == 0
			? "Don't miss out on top seasonal talent to help you reach your year-end goals this holiday season because you were late to the game."
			: 'Build automated workflows customized for your role and business.';
	const postImage = index % 2 == 0 ? '/post-1.jpeg' : '/post-2.jpeg';
	const commentText =
		'Ever wondered how to turn your lettering into a working font? Join us as we host Francis Chouquet @Fran6 in this free online talk to chat about his work and how he creates his amazing fonts!';

	return (
		<div className="flex w-full cursor-pointer items-start gap-3 bg-white py-4">
			<img src={appIcon} alt="Loom logo" className="h-9 w-9 rounded-md" />
			{/* <img src="/profile3.jpg" alt="Profile Pic" className="h-8 w-8 rounded-full" /> */}
			<div>
				{/* <div className="flex items-center gap-3">
					<div className="grow"> */}
				<h4 className="text-sm font-bold text-gray-600">
					{appName} <span className="ml-3 text-xs font-normal text-neutral-400">Async video collaboration tool . 33m</span>
				</h4>
				{/* <p className={`${inter.className} text-xs text-neutral-400`}>Async video collaboration tool</p> */}
				{/* </div> */}
				{/* <h4 className="grow font-bold text-black">{personName}</h4>
					<MoreHorizontalIcon className="h-6 w-6 text-black" /> */}
				{/* </div> */}
				<p className={`mt-1 line-clamp-3 font-semibold leading-tight text-black`}>{postText}</p>
				<div className="mt-2 w-full cursor-pointer">
					{/* <div className="flex items-center gap-3">
						<img src={appIcon} alt="Loom logo" className="h-9 w-9 rounded-md" />
						<div className="grow">
							<h4 className="font-bold text-black">{appName}</h4>
							<p className={`${inter.className} text-xs text-neutral-400`}>Async video collaboration tool</p>
						</div>

						{/* <button
							className={`${inter.className} rounded-lg bg-[#5100ff]/5 px-3 py-0.5 text-sm font-medium text-[#5100ff] hover:bg-[#5100ff] hover:text-white`}
						>
							Follow
						</button> */}
					{/* <MoreHorizontalIcon className="h-6 w-6 text-black" />
					</div>  */}
					{/* <p className={`${inter.className} mt-3 leading-tight text-black`}>{postText}</p> */}
					<img src={postImage} alt="Loom banner" className="mt-3 rounded-lg" />
					<div className="mt-3 flex items-center justify-between gap-1 px-1">
						<div className="min-w-20 flex items-center gap-2">
							<FavouriteIcon className="h-[1.15rem] w-[1.15rem] !stroke-2 text-neutral-600" />
							<p className="text-sm text-neutral-600">15</p>
						</div>
						<div className="min-w-20 flex items-center gap-2">
							<BubbleChatIcon className="h-[1.15rem] w-[1.15rem] -scale-x-100 text-neutral-600" />
							<p className="text-sm text-neutral-600">6</p>
						</div>

						<Bookmark02Icon className="h-[1.15rem] w-[1.15rem] text-neutral-600" />
					</div>
				</div>
			</div>
		</div>
	);
}
