'use client';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useRouter } from 'next/navigation';
import { list } from 'postcss';

export default function Listing({ listing }) {
	const router = useRouter();

	const types = {
		lifetime: ' Lifetime',
		per_month: '/month',
		per_week: '/week',
		per_use: '/use',
	};

	let absoluteUrl = listing.url;
	if (!listing.url.includes('http://') && !listing.url.includes('https://')) {
		absoluteUrl = `https://${listing.url}`;
	}

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

	return (
		<div onClick={() => router.push(`/product/${listing.nameId}`)}>
			<div className="flex h-full w-full cursor-pointer flex-col rounded-lg border border-[#eee] bg-white">
				<AspectRatio ratio={16 / 9}>
					{listing.youtubeURL && (
						<iframe
							width="100%"
							height="100%"
							src={`https://www.youtube.com/embed/${youtubeId}`}
							title="YouTube video player"
							allow="autoplay; encrypted-media;"
							allowFullScreen
							className="rounded-t-lg bg-neutral-100"
						></iframe>
					)}
					{!listing.youtubeURL && (
						<img
							src={listing.image1 ? listing.image1 : listing.image2 ? listing.image2 : listing.image3}
							alt="Loom banner"
							className="h-full w-full rounded-t-lg bg-neutral-100 object-cover"
						/>
					)}
				</AspectRatio>
				<div className="flex items-start gap-4 p-3">
					<img src={listing.appIcon} alt="Loom logo" className="h-12 w-12 rounded-md" />
					<div>
						<h4 className="text font-semibold text-black">{listing.appName}</h4>
						<p className={`line-clamp-3 text-sm leading-tight text-neutral-600`}>{listing.shortDescription}</p>
					</div>
				</div>
				<span className="w-full flex-1"></span>

				<div className="relative px-3 pb-3">
					<div
						onClick={(e) => {
							e.stopPropagation();
							window.open(absoluteUrl, '_blank');
						}}
						className="flex w-full items-center justify-center gap-5 rounded-full border border-neutral-200 py-2 font-bold text-black hover:border-black hover:bg-black hover:text-white"
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
					</div>
				</div>
			</div>
		</div>
	);
}
