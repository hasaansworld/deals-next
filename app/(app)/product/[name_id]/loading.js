import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function ProductLoading() {
	return (
		<div className="w-full px-6 pb-60 pt-24">
			<div className="mx-auto max-w-[600px] flex-1 animate-pulse lg:max-w-[700px]">
				<div className="flex items-start gap-4" id="product">
					<div className="-ml-16 h-12 w-12 rounded-md bg-neutral-100" />
					<div className="flex-1">
						<div className="flex items-center gap-3">
							<div className="h-8 w-44 rounded-lg bg-neutral-100" />
							<div className="h-6 w-6 rounded-full bg-neutral-100" />
						</div>

						<div className="mt-2 leading-tight text-neutral-800">
							<div className="h-4 w-56 rounded-lg bg-neutral-100" />
						</div>

						<div className="mt-4 flex items-start justify-between">
							<div className="flex h-12 w-1/2 flex-col items-center rounded-full bg-neutral-100 lg:w-3/5"></div>
						</div>

						<div className="mt-10 w-full">
							<AspectRatio ratio={16 / 9}>
								<div className="h-full w-full rounded-lg bg-neutral-100" />
							</AspectRatio>
						</div>

						<div className="mt-10 h-8 w-44 rounded-lg bg-neutral-100" />
						<div className="mt-2 h-6 w-full rounded-lg bg-neutral-100" />
						<div className="mt-2 h-6 w-full rounded-lg bg-neutral-100" />
						<div className="mt-2 h-6 w-4/6 rounded-lg bg-neutral-100" />
						<div className="mt-2 h-6 w-full rounded-lg bg-neutral-100" />
						<div className="mt-2 h-6 w-1/2 rounded-lg bg-neutral-100" />
						{/* <p className="mt-2 text-neutral-800">{listing.introduction}</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}
