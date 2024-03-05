import { inter } from '../../app/fonts';
import { Bookmark02Icon, Comment01Icon, FavouriteIcon, MoreHorizontalIcon } from '@hugeicons/react-pro';
import Comment02Icon from '../icons/comment';
import BubbleChatIcon from '../icons/bubble_chat';

export default function Post({ index }) {
	const appIcon = index % 2 == 0 ? '/loom.png' : '/zapier-logomark.svg';
	const appName = index % 2 == 0 ? 'Loom' : 'Zapier';
	const appTagline = index % 2 == 0 ? 'Async video collaboration' : 'Automation magic';
	const personName = index % 2 == 0 ? 'Hasaan Ahmed' : 'Orman Clark';
	const postText =
		index % 2 == 0
			? "Don't miss out on top seasonal talent to help you reach your year-end goals this holiday season because you were late to the game."
			: 'Build automated workflows customized for your role and business.';
	const postImage = index % 2 == 0 ? '/post-1.jpeg' : '/post-2.jpeg';
	const commentText =
		'Ever wondered how to turn your lettering into a working font? Join us as we host Francis Chouquet @Fran6 in this free online talk to chat about his work and how he creates his amazing fonts!';

	return (
		<div className="flex w-full cursor-pointer items-start gap-3 bg-white py-6">
			{index % 3 == 2 ? (
				<img src={appIcon} alt="Loom logo" className="h-10 w-10 rounded-md" />
			) : (
				<img src="/profile.jpg" alt="Person" className="h-10 w-10 rounded-full" />
			)}

			<div className="flex h-full flex-1 flex-col">
				{index % 3 == 2 ? (
					<h4 className="text-sm font-bold text-gray-600">
						{appName} <span className="ml-2 text-xs font-normal text-neutral-400">{appTagline} . 33m</span>
					</h4>
				) : (
					<h4 className="text-sm font-bold text-gray-600">
						{personName}
						<span className="ml-2 text-xs font-normal text-neutral-400">. 33m</span>
					</h4>
				)}
				<p className={`mt-1 line-clamp-3 font-semibold leading-tight text-black`}>{postText}</p>
				<span className="w-full flex-1"></span>
				{index % 3 == 2 && <img src={postImage} alt="Loom banner" className="mt-3 rounded-lg" />}
				<div className="mt-3 flex items-center justify-between gap-1 px-1">
					<div className="min-w-20 flex items-center gap-2">
						<FavouriteIcon className="h-4 w-4 text-neutral-500" />
						<p className="text-sm text-neutral-500">15</p>
					</div>
					<div className="min-w-20 flex items-center gap-2">
						<BubbleChatIcon className="h-4 w-4 -scale-x-100 text-neutral-500" />
						<p className="text-sm text-neutral-500">6</p>
					</div>

					<Bookmark02Icon className="h-4 w-4 text-neutral-500" />
				</div>
			</div>
		</div>
	);
}
