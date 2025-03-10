import { Bookmark02Icon } from '@hugeicons/react-pro';
import BubbleChatIcon from '@/components/icons/bubble_chat';
import FavouriteIcon from '@/components/icons/favorite';

export default function Comment() {
	return (
		<div className="flex w-full items-start gap-4">
			<img src="/profile3.jpg" alt="Profile Picture" className="h-10 w-10 rounded-full border border-[#eee]" />
			<div>
				<p className="font-semibold">Hasaan Ahmed</p>
				<p className="text-neutral-800">
					I really love this but what plans do you have for users who purchase lifetime deals. Would you switch them to a new plan?
				</p>
				<div className="mt-3 flex items-center gap-12">
					<div className="min-w-20 flex items-center gap-2">
						<FavouriteIcon className="h-4 w-4 text-neutral-400" />
						<p className="text-sm text-neutral-400">15 Likes</p>
					</div>
					<div className="min-w-20 flex items-center gap-2">
						<BubbleChatIcon className="h-4 w-4 -scale-x-100 text-neutral-400" />
						<p className="text-sm text-neutral-400">6 Replies</p>
					</div>
					<p className="cursor-pointer text-sm text-neutral-400 hover:text-fuchsia-400">Reply</p>
				</div>
			</div>
		</div>
	);
}
