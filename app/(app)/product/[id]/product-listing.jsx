'use client';
import { useRef, useState } from 'react';
import Comment from '@/components/comment/comment';
import Flag03Icon from '@/components/icons/flag';
import LinkSquare02Icon from '@/components/icons/link_square';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { notFound } from 'next/navigation';

const scrollToElement = (id, ref) => {
	const element = document.getElementById(id);
	ref.current.scrollTo({
		top: element.offsetTop - 90,
		behavior: 'smooth',
	});
};

function getTimeLeftUntilDate(targetDateStr) {
	const targetDate = new Date(targetDateStr);
	const currentDate = new Date();
	const differenceMs = targetDate - currentDate;

	const daysLeft = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
	const hoursLeft = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutesLeft = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));

	if (daysLeft > 0) {
		return { message: `Ends in ${daysLeft} days`, color: 'text-amber-500' };
	} else if (hoursLeft > 0) {
		return { message: `Ends in ${hoursLeft} hours`, color: 'text-amber-500' };
	} else if (minutesLeft > 0) {
		return { message: `Ends in ${minutesLeft} minutes`, color: 'text-rose-500' };
	} else {
		return { message: 'Ends in < 1 minute', color: 'text-rose-500' };
	}
}

function getAbsoluteURL(url) {
	let absoluteURL = url;
	if (!url.includes('http://') && !url.includes('https://')) {
		absoluteURL = `https://${url}`;
	}
	return absoluteURL;
}

export default function ProductListing({ listing }) {
	if (!listing) notFound();

	const scrollRef = useRef(null);
	const introRef = useRef(null);
	const commentsRef = useRef(null);
	const [section, setSection] = useState('product');

	const handleScroll = (event) => {
		// const { scrollTop, clientHeight, scrollHeight } = event.target;
		// const currentOffset = event.target.scrollTop;
		// const introOffset = introRef.current.offsetTop;
		// const commentsOffset = commentsRef.current.offsetTop;
		// const paddingTop = 90;
		// if (currentOffset < introOffset - paddingTop && section !== 'product') {
		// 	setSection('product');
		// } else if (currentOffset >= introOffset - paddingTop && currentOffset < commentsOffset - paddingTop && section !== 'intro') {
		// 	setSection('intro');
		// } else if ((currentOffset >= commentsOffset - paddingTop && section !== 'comments') || scrollTop + clientHeight === scrollHeight) {
		// 	setSection('comments');
		// }
	};

	const types = {
		lifetime: ' Lifetime',
		per_month: '/month',
		per_week: '/week',
		per_use: '/use',
	};

	const absoluteURL = getAbsoluteURL(listing.url);
	const absoluteWebsiteURL = getAbsoluteURL(listing.websiteURL);

	let percentOff = 0;
	if (listing.oldPrice) {
		percentOff = Math.round(((listing.oldPrice - listing.price) / listing.oldPrice) * 100);
	}

	let youtubeId = '';
	if (listing.youtubeURL && listing.youtubeURL.includes('youtube.')) {
		youtubeId = listing.youtubeURL.split('v=')[1];
	} else if (listing.youtubeURL && listing.youtubeURL.includes('youtu.be')) {
		let parts = listing.youtubeURL.split('/');
		youtubeId = parts[parts.length - 1];
	}

	const { message, color } = getTimeLeftUntilDate(listing.endsOn);

	return (
		<div className="w-full px-6 pb-60 pt-24" ref={scrollRef} onScroll={handleScroll}>
			{/* <div className="flex items-start gap-16">
				<div className="w-1/4"></div> */}
			<div className="mx-auto max-w-[600px] flex-1">
				<div className="flex items-start gap-4" id="product">
					<img src={listing.appIcon} alt={`${listing.appName} logo`} className="-ml-16 h-12 w-12 rounded-md" />
					<div className="flex-1">
						<div className="flex items-center gap-3">
							<h4 className="text text-2xl font-bold text-black">{listing.appName}</h4>
							<Link href={absoluteWebsiteURL} target="_blank">
								<LinkSquare02Icon className="h-4 w-4 text-neutral-400" stroke="2.5" />
							</Link>
						</div>

						<p className="mt-1 leading-tight text-neutral-800">{listing.shortDescription}</p>

						<div className="flex items-start justify-between">
							<div className="flex w-1/2 flex-col items-center">
								<Link
									href={absoluteURL}
									target="_blank"
									className="mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-neutral-200 px-16 py-2 font-bold text-black shadow hover:border-black hover:bg-black hover:text-white"
								>
									{listing.oldPrice && (
										<span className="font-semibold text-neutral-400 line-through">
											{listing.priceCurrency}
											{listing.oldPrice}
										</span>
									)}{' '}
									{listing.priceCurrency}
									{listing.price}
									{types[listing.type]} {listing.oldPrice && <span className="text-sm font-semibold text-green-500">{percentOff}% off</span>}
								</Link>
								<p className={`mt-2 text-sm font-medium ${color}`}>{message}</p>
							</div>

							<Link
								href="https://tally.so/r/wzqjPR"
								target="_blank"
								className="mt-3 flex items-center gap-2 bg-transparent p-2 text-sm text-rose-500"
							>
								<Flag03Icon className="h-4 w-4" /> Report
							</Link>
						</div>
					</div>
				</div>

				<Carousel className="mt-10 w-full">
					<CarouselContent>
						{listing.youtubeURL && (
							<CarouselItem>
								<AspectRatio ratio={16 / 9}>
									<iframe
										width="100%"
										height="100%"
										src={`https://www.youtube.com/embed/${youtubeId}`}
										title="YouTube video player"
										allow="autoplay; encrypted-media;"
										allowFullScreen
										className="rounded-lg bg-neutral-100"
									></iframe>
								</AspectRatio>
							</CarouselItem>
						)}
						{listing.image1 && (
							<CarouselItem>
								<AspectRatio ratio={16 / 9}>
									<img
										src={listing.image1}
										alt="Listing image 1"
										className="h-full w-full rounded-xl border border-neutral-200 bg-neutral-100 object-cover"
									/>
								</AspectRatio>
							</CarouselItem>
						)}
						{listing.image2 && (
							<CarouselItem>
								<AspectRatio ratio={16 / 9}>
									<img
										src={listing.image2}
										alt="Listing image 2"
										className="h-full w-full rounded-xl border border-neutral-200 bg-neutral-100 object-cover"
									/>
								</AspectRatio>
							</CarouselItem>
						)}
						{listing.image3 && (
							<CarouselItem>
								<AspectRatio ratio={16 / 9}>
									<img
										src={listing.image3}
										alt="Listing image 3"
										className="h-full w-full rounded-xl border border-neutral-200 bg-neutral-100 object-cover"
									/>
								</AspectRatio>
							</CarouselItem>
						)}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				<h4 className="mt-10 text-2xl font-bold text-black" id="intro" ref={introRef}>
					Introduction
				</h4>
				<p className="mt-2 text-neutral-800">{listing.introduction}</p>
				{/* <h4 className="mt-10 text-2xl font-bold text-black" id="comments" ref={commentsRef}>
						Comments
					</h4>
					<Textarea name="comment" className="mt-2 w-full text-base" rows="4" placeholder="Add a comment" />
					<div className="-ml-14 mt-6">
						<Comment />
					</div> */}
			</div>
			{/* <div className="w-1/4"> */}
			{/* <div className="fixed flex flex-col gap-2 border-l border-fuchsia-100 py-4">
						<button
							onClick={() => {
								scrollToElement('product', scrollRef);
								// setSection('product');
							}}
							className={`${
								section === 'product' ? 'border-fuchsia-500 font-semibold text-black' : 'border-transparent font-medium text-neutral-400'
							} border-l px-4 text-start`}
						>
							Product
						</button>
						<button
							onClick={() => {
								scrollToElement('intro', scrollRef);
								// setSection('intro');
							}}
							className={`${
								section === 'intro' ? 'border-fuchsia-500 font-semibold text-black' : 'border-transparent font-medium text-neutral-400'
							} border-l px-4 text-start`}
						>
							Introduction
						</button>
						<button
							onClick={() => {
								scrollToElement('comments', scrollRef);
							}}
							className={`${
								section === 'comments' ? 'border-fuchsia-500 font-semibold text-black' : 'border-transparent font-medium text-neutral-400'
							} border-l px-4 text-start`}
						>
							Comments <span className="ml-3 text-sm">1</span>
						</button>
					</div> */}
			{/* </div> */}
			{/* </div> */}
		</div>
	);
}
