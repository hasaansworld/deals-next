import { inter } from '../../app/fonts';
import { Bookmark02Icon, Comment01Icon, MoreHorizontalIcon } from '@hugeicons/react-pro';
import Comment02Icon from '../icons/comment';
import BubbleChatIcon from '../icons/bubble_chat';
import FireIcon from '../icons/fire';
import FavouriteIcon from '../icons/favorite';
import BubbleChatSmall from '../icons/bubble_chat_small';
import Link from 'next/link';

export default function Listing({ index }) {
	const appIcon = index % 2 == 0 ? '/loom.png' : '/zapier-logomark.svg';
	const appName = index % 2 == 0 ? 'Loom' : 'Zapier';
	const appTagline =
		index % 2 == 0 ? 'Async video collaboration' : 'Automation magic that will help you be more productive and get more work done through computers';
	const personName = index % 2 == 0 ? 'Hasaan Ahmed' : 'Orman Clark';
	const postText =
		index % 2 == 0
			? "Don't miss out on top seasonal talent to help you reach your year-end goals this holiday season because you were late to the game."
			: 'Build automated workflows customized for your role and business.';
	const postImage = index % 2 == 0 ? '/post-1.jpeg' : '/post-2.jpeg';
	const commentText =
		'Ever wondered how to turn your lettering into a working font? Join us as we host Francis Chouquet @Fran6 in this free online talk to chat about his work and how he creates his amazing fonts!';

	return (
		<Link href="/product">
			<div className="flex h-full w-full cursor-pointer flex-col rounded-lg border border-[#eee] bg-white">
				<img src={postImage} alt="Loom banner" className="rounded-tl-lg rounded-tr-lg" />
				<div className="flex items-start gap-4 p-3">
					<img src={appIcon} alt="Loom logo" className="h-12 w-12 rounded-md" />
					<div>
						<h4 className="text font-semibold text-black">{appName}</h4>
						<p className={`line-clamp-3 text-sm leading-tight text-neutral-600`}>{appTagline}</p>
					</div>
				</div>
				<span className="w-full flex-1"></span>
				{/* <div className="mb-2 mt-3 flex justify-between px-5">
				<p className="text-xs text-neutral-400">12 interested</p>
				<p className="text-xs text-neutral-400">6 comments</p>
			</div> */}

				<div className="relative px-3 pb-3">
					<button className="flex w-full items-center justify-center gap-3 rounded-full border border-neutral-200 py-2 font-medium text-black hover:border-black hover:bg-black hover:text-white">
						<span className="text-neutral-400 line-through">$128</span> {index % 3 == 2 ? '$12/month' : '$59 Lifetime'}{' '}
						<span className="text-xs text-green-500">10% off</span>
					</button>
				</div>
			</div>
		</Link>
	);
}
