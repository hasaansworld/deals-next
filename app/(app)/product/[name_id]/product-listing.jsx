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
import Listing from '@/components/listing/listing';
import ListingImage from './listing-image';

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
		return { message: `Ends in ${daysLeft} days`, color: daysLeft > 7 ? 'text-amber-500' : 'text-rose-500' };
	} else if (hoursLeft > 0) {
		return { message: `Ends in ${hoursLeft} hours`, color: 'text-rose-500' };
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

export default function ProductListing({ listing, suggestions }) {
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
		per_year: '/year',
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
		<div className="px-4 md:px-10">
			<div className="w-full pb-40 pt-24 md:px-6" ref={scrollRef} onScroll={handleScroll}>
				{/* <div className="flex items-start gap-16">
				<div className="w-1/4"></div> */}
				<div className="mx-auto max-w-[600px] flex-1 lg:max-w-[700px]">
					<div className="flex items-start gap-4" id="product">
						<img src={listing.appIcon} alt={`${listing.appName} logo`} className="h-12 w-12 rounded-md md:-ml-16" />
						<div className="flex-1">
							<div className="flex items-center gap-3">
								<h4 className="text text-2xl font-bold text-black">{listing.appName}</h4>
								<Link href={absoluteWebsiteURL} target="_blank">
									<LinkSquare02Icon className="h-4 w-4 text-neutral-400" stroke="2.5" />
								</Link>
							</div>

							<p className="mt-1 text-lg leading-tight text-neutral-800">{listing.shortDescription}</p>

							<div className="-ml-16 flex items-start justify-between gap-2 md:ml-0">
								<div className="flex flex-col items-center max-sm:flex-1 md:w-1/2 lg:w-3/5">
									<Link
										href={absoluteURL}
										target="_blank"
										className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-neutral-400 px-3 py-2 text-lg font-bold text-black shadow hover:border-black hover:bg-black hover:text-white md:gap-3 md:px-16"
									>
										{listing.oldPrice && (
											<span className="font-semibold text-neutral-400 line-through">
												{listing.priceCurrency}
												{listing.oldPrice}
											</span>
										)}{' '}
										{listing.priceCurrency}
										{listing.price}
										{types[listing.type]}{' '}
										{listing.oldPrice && <span className="text-sm font-semibold text-green-500">{percentOff}% off</span>}
									</Link>
									<div className="mt-2 flex w-full items-center justify-between px-8 md:justify-center">
										<p className={`text-sm font-medium ${color}`}>{message}</p>
										<Link
											href="https://tally.so/r/wzqjPR"
											target="_blank"
											className="flex items-center gap-1 bg-transparent p-2 text-sm text-rose-500 md:hidden"
										>
											<Flag03Icon className="h-4 w-4" /> Report
										</Link>
									</div>
								</div>

								<Link
									href="https://tally.so/r/wzqjPR"
									target="_blank"
									className="mt-5 hidden items-center gap-1 bg-transparent p-2 text-sm text-rose-500 md:mt-3 md:flex md:gap-2"
								>
									<Flag03Icon className="h-4 w-4" /> Report
								</Link>
							</div>
						</div>
					</div>

					<Carousel className="mt-10 w-full">
						<CarouselContent>
							{listing.youtubeURL && (
								<CarouselItem className={!listing.image1 && !listing.image2 && !listing.image3 ? '' : 'basis-11/12'}>
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
								<ListingImage src={listing.image1} index={listing.youtubeURL ? 1 : 0} alt={'Listing image 1'} listing={listing} />
							)}
							{listing.image2 && (
								<ListingImage src={listing.image2} index={listing.youtubeURL ? 2 : 1} alt={'Listing image 2'} listing={listing} />
							)}
							{listing.image3 && (
								<ListingImage src={listing.image3} index={listing.youtubeURL ? 3 : 2} alt={'Listing image 3'} listing={listing} />
							)}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>

					<h4 className="mt-10 text-2xl font-bold text-black" id="intro" ref={introRef}>
						Introduction
					</h4>
					<p className="mt-2 whitespace-pre-wrap text-lg text-neutral-800">{listing.introduction}</p>
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

			<h2 className="w-full text-center text-2xl font-bold">Find More Deals</h2>
			<div className="mb-16 mt-8 flex flex-col gap-6 md:grid md:auto-rows-max md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{suggestions.length > 0 &&
					suggestions.map((listing, index) => (
						<div className={`h-full ${index === 4 ? 'xl:hidden 2xl:block' : index === 5 ? 'xl:hidden 2xl:hidden' : ''}`} key={listing.id}>
							<Listing listing={listing} />
						</div>
					))}
			</div>
		</div>
	);
}
