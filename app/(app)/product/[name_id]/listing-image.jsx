'use client';
import Cancel01Icon from '@/components/icons/cancel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export default function ListingImage({ src, alt, index, listing }) {
	const fullImage =
		(index === 0 && !listing.youtubeURL && !listing.image2 && !listing.image3) ||
		(index === 1 && !listing.youtubeURL && !listing.image1 && !listing.image3) ||
		(index === 2 && !listing.youtubeURL && !listing.image1 && !listing.image2);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<CarouselItem className={fullImage ? '' : 'basis-11/12'}>
					<AspectRatio ratio={16 / 9}>
						<img src={src} alt={alt} className="h-full w-full cursor-pointer rounded-xl border border-neutral-200 bg-neutral-100 object-cover" />
					</AspectRatio>
				</CarouselItem>
			</DialogTrigger>
			<DialogContent className="h-[calc(100vh-4rem)] !max-w-[calc(100vw-8rem)] !rounded-xl border-0 bg-black p-0" closeHidden>
				{/* <img src={src} alt={alt} className="h-[calc(100vh-4rem)] w-[calc(100vw-4rem)] rounded-xl object-contain" /> */}
				<ImageCarousel listing={listing} index={index} />
				<DialogClose className="absolute -right-14 -top-3 h-12 w-12" asChild>
					<button className="focus:outline-none">
						<Cancel01Icon className="h-12 w-12 rounded-full bg-black p-3 text-white" stroke="3" />
					</button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	);
}

function ImageCarousel({ listing, index = 0 }) {
	const [api, setApi] = useState();

	let youtubeId = '';
	if (listing.youtubeURL && listing.youtubeURL.includes('youtube.')) {
		youtubeId = listing.youtubeURL.split('v=')[1];
	} else if (listing.youtubeURL && listing.youtubeURL.includes('youtu.be')) {
		let parts = listing.youtubeURL.split('/');
		youtubeId = parts[parts.length - 1];
	}

	useEffect(() => {
		if (!api) return;

		api.scrollTo(index, true);
	}, [api, index]);

	return (
		<Carousel className="mx-auto h-[calc(100vh-4rem)] w-[calc(100vw-8rem)] rounded-xl bg-black" setApi={setApi}>
			<CarouselContent>
				{listing.youtubeURL && (
					<CarouselItem className="flex h-[calc(100vh-4rem)] items-center justify-center">
						<AspectRatio ratio={16 / 9}>
							<iframe
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${youtubeId}`}
								title="YouTube video player"
								allow="autoplay; encrypted-media;"
								allowFullScreen
								className="!rounded-xl bg-neutral-100"
							></iframe>
						</AspectRatio>
					</CarouselItem>
				)}
				{listing.image1 && (
					<CarouselItem className="h-[calc(100vh-4rem)] w-[calc(100vw-8rem)]">
						<img src={listing.image1} alt="Listing Image 1" className="h-full w-full rounded-xl object-contain" />
					</CarouselItem>
				)}
				{listing.image2 && (
					<CarouselItem className="h-[calc(100vh-4rem)] w-[calc(100vw-8rem)]">
						<img src={listing.image2} alt="Listing Image 2" className="h-full w-full rounded-xl object-contain" />
					</CarouselItem>
				)}
				{listing.image3 && (
					<CarouselItem className="h-[calc(100vh-4rem)] w-[calc(100vw-8rem)]">
						<img src={listing.image3} alt="Listing Image 3" className="h-full w-full rounded-xl object-contain" />
					</CarouselItem>
				)}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
