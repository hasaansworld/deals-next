import { Flag03Icon } from '@hugeicons/react-pro';
import Comment from '../../components/comment/comment';
import LinkSquare02Icon from '../../components/icons/link_square';

export default function ProductListing() {
	return (
		<div className="h-screen w-full overflow-y-auto px-6 pb-60 pt-24">
			<div className="flex items-start gap-16">
				<div className="w-1/4"></div>
				<div className="max-w-[600px] flex-1">
					<div className="flex items-start gap-4" id="product">
						<img src="/loom.png" alt="Loom logo" className="-ml-16 h-12 w-12 rounded-md" />
						<div className="flex-1">
							<div className="flex items-center gap-3">
								<h4 className="text text-2xl font-bold text-black">Loom</h4>
								<LinkSquare02Icon className="h-4 w-4 text-neutral-400" stroke="2.5" />
							</div>

							<p className="mt-1 leading-tight text-neutral-800">
								Automation magic that will help you be more productive and get more work done through computers
							</p>

							<div className="flex items-start justify-between">
								<div className="flex w-1/2 flex-col items-center">
									<button className="mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-neutral-200 px-16 py-2 font-medium text-black shadow hover:border-black hover:bg-black hover:text-white">
										<span className="text-neutral-400 line-through">$128</span> $59 Lifetime
										<span className="text-xs text-green-500">10% off</span>
									</button>
									<p className="mt-2 text-xs font-medium text-amber-500">Ends in 30 days</p>
								</div>

								<button className="mt-3 flex items-center gap-2 bg-transparent p-2 text-sm text-rose-500">
									<Flag03Icon className="h-4 w-4" /> Report
								</button>
							</div>
						</div>
					</div>
					<img src="/post-1.jpeg" alt="Product Image" className="mt-10 w-full rounded-xl border border-gray-200" />
					<h4 className="mt-10 text-2xl font-bold text-black" id="intro">
						Introduction
					</h4>
					<p className="mt-2 text-neutral-800">
						Hey everyone!
						<br />
						<br />
						We created vidyo.ai to save marketers, video editors, content creators and teams from the time-consuming task of repurposing video
						content for different platforms. We hope it streamlines your content creation process too! 🚀
						<br />
						<br />
						We realized that it takes a long time to search for key moments in a video manually, do timestamp calculus, generate subtitles, style
						and edit videos, and resize —all in one place. It was too expensive and clunky. We thought, what if we can automate this? So we set off
						to solve this problem, and that’s how vidyo.ai was born.
						<br />
						<br />
						vidyo.ai identifies the best moments of a longform video and creates short clips ready for social media. It offers scene change
						detection, customizable AI subtitles, B-roll footage, virality predictor, brand kit, AI social media descriptions and post scheduler,
						and Viddy - our AI content assistant. The tool is trusted by over 1 million creators and businesses worldwide.
						<br />
						<br />
						It’s as easy as 🥧:
						<br />
						<br />
						🎬 Drop your video links into vidyo.ai <br />
						☕ Go make a cup of coffee <br />
						⚡ In minutes, vidyo.ai watches your video, identifies the key moments, and creates shareable social clips. <br />
						<br />
						<br />
						We offer an all-in-one tool for video editing, including features like video templates, AI video resizing, full video and clip
						transcripts, video timestamps, auto video chapters, and metadata for all social platforms, including YouTube Shorts, Instagram, Twitter,
						LinkedIn, and Facebook Reels.
						<br />
						<br />
						You can also create studio-grade videos in just a few taps from your phone with our latest mobile support feature. And with Viddy,
						you’ll never run out of content ideas. Viddy looks at your long videos and quickly suggests new content ideas, SEO-friendly blog posts,
						show notes, tweets, and LinkedIn posts. It's like having a brainstorming partner!
						<br />
						<br />
						vidyo.ai currently supports English, Spanish, German, and French, with more languages on the horizon to be announced soon.
						<br />
						<br />
						Thanks for checking us out, and happy to answer any questions you have! 💙
					</p>
					<h4 className="mt-10 text-2xl font-bold text-black" id="comments">
						Comments
					</h4>
					<div className="mt-2 rounded-xl border border-neutral-200 p-4">
						<textarea name="comment" className="h-auto w-full bg-transparent" placeholder="Add a comment"></textarea>
					</div>
					<div className="mt-6">
						<Comment />
					</div>
				</div>
				<div className="w-1/4">
					<div className="fixed flex flex-col gap-2 border-l border-[#eee] p-4">
						<a href="#product" className="font-semibold text-black">
							Product
						</a>
						<a href="#intro" className="font-medium text-neutral-400">
							Introduction
						</a>
						<a href="#comments" className="font-medium text-neutral-400">
							Comments
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
