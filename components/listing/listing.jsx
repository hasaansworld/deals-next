'use client';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useRouter } from 'next/navigation';

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

	return (
		<div onClick={() => router.push(`/product/${listing.id}`)}>
			<div className="flex h-full w-full cursor-pointer flex-col rounded-lg border border-[#eee] bg-white">
				<AspectRatio ratio={16 / 9}>
					<img src={listing.image1} alt="Loom banner" className="h-full w-full rounded-t-lg object-cover" />
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
						className="flex w-full items-center justify-center gap-5 rounded-full border border-neutral-200 py-2 font-medium text-black hover:border-black hover:bg-black hover:text-white"
					>
						{listing.oldPrice && (
							<span className="text-neutral-400 line-through">
								{listing.priceCurrency}
								{listing.oldPrice}
							</span>
						)}{' '}
						{listing.priceCurrency}
						{listing.price}
						{types[listing.type]} {listing.oldPrice && <span className="text-sm text-green-500">{percentOff}% off</span>}
					</div>
				</div>
			</div>
		</div>
	);
}
