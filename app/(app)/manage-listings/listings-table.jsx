'use client';

import CancelCircleIcon from '@/components/icons/cancel_circle';
import CheckmarkCircle02Icon from '@/components/icons/check_circle_solid';
import Clock01Icon from '@/components/icons/clock_circle_solid';
import Delete01Icon from '@/components/icons/delete';
import Edit02Icon from '@/components/icons/edit';
import Link from 'next/link';
import { useState } from 'react';
import DeactivatePopover from './deactivate-popover';
import { useRouter } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function ListingsTable({ allListings }) {
	const [listings, setListings] = useState(allListings);
	const router = useRouter();

	const updateActive = (id, active) => {
		const updatedListings = listings.map((listing) => (listing.id === id ? { ...listing, active: active } : listing));
		setListings(updatedListings);
	};

	return (
		<>
			{listings.map((listing, index) => (
				<div
					onClick={() => router.push(`/product/${listing.nameId}`)}
					className="flex cursor-pointer items-center gap-3 border-b border-neutral-200 py-5 md:gap-10 md:px-2"
					key={listing.id}
				>
					<img src={listing.appIcon} alt="Loom logo" className="h-12 w-12 shrink-0 self-start rounded-md" />
					<div className="flex-1">
						<p className="text-lg font-semibold">{listing.appName}</p>
						<p className="text line-clamp-3 leading-tight text-neutral-500">{listing.shortDescription}</p>
						<div className="md:hidden">
							<div className="mt-1 flex items-center gap-1 md:w-16">
								{listing.approved ? (
									listing.active ? (
										<>
											<CheckmarkCircle02Icon className="h-4 w-4 text-green-500" />
											<p className="text-sm text-green-500">Active</p>
										</>
									) : (
										<>
											<CancelCircleIcon className="h-4 w-4 text-rose-500" />
											<p className="text-sm text-rose-500">Deactivated</p>
										</>
									)
								) : (
									<>
										<Clock01Icon className="h-4 w-4 text-amber-500" />
										<p className="text-sm text-amber-500">Needs Approval</p>
									</>
								)}
							</div>
						</div>
					</div>

					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className="hidden w-12 items-center md:flex md:w-16 md:flex-col">
									{listing.approved ? (
										listing.active ? (
											<>
												<CheckmarkCircle02Icon className="h-6 w-6 text-green-500" />
												<p className="text-sm text-green-500">Active</p>
											</>
										) : (
											<>
												<CancelCircleIcon className="h-6 w-6 text-rose-500" />
												<p className="text-sm text-rose-500">Deactivated</p>
											</>
										)
									) : (
										<>
											<Clock01Icon className="h-6 w-6 text-amber-500" />
											<p className="text-center text-sm text-amber-500">
												Needs
												<br />
												Approval
											</p>
										</>
									)}
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>{!listing.active ? 'Deactivated' : listing.approved ? 'Approved' : "We're reviewing your listing"}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<div className="flex shrink-0 items-center gap-0.5 md:gap-4">
						<div
							onClick={(e) => {
								e.stopPropagation();
								router.push(`/edit-listing/${listing.nameId}`);
							}}
							className="h-12 w-12 rounded-full p-3.5 hover:bg-neutral-100 hover:text-green-600"
						>
							<Edit02Icon className="h-5 w-5" stroke="2" />
						</div>
						<DeactivatePopover listing={listing} deactivateCallback={updateActive} />
					</div>
				</div>
			))}
		</>
	);
}
