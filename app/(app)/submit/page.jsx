'use client';
import ArrowRight02Icon from '@/components/icons/arrow_right';
import UserCircle02SolidIcon from '@/components/icons/user_circle_solid';
import UserGroupIcon from '@/components/icons/user_group';
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import VerifyEmailPopover from '@/components/verify-email-popover/verify-email-popover';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import useSubmit from '@/hooks/submit';

export default function Submit() {
	// const { user } = useAuth({ middleware: 'guest' });
	const { count } = useSubmit();
	const hasCount = typeof count !== 'undefined';
	const remaining = hasCount ? Math.max(0, 100 - count) : 100;

	return (
		<div className="flex flex-col items-center px-4 py-20 md:px-20">
			<h1 className="mt-12 text-center text-lg font-bold text-black md:text-2xl">Got Any Deals? Let&apos;s Add Them To Appdeals</h1>
			<p className="text-center text-sm text-neutral-400 md:text-lg">
				Share your offerings with the Appdeals community to drive sales and accelerate growth.
			</p>
			{/* {(!user || user.email_verified_at) && ( */}
			<Link
				href="/new-listing"
				className="mt-8 flex items-center gap-1 rounded-full bg-fuchsia-500 px-8 py-2 font-medium text-white hover:ring-4 hover:ring-fuchsia-200"
			>
				Submit For Free <ArrowRight02Icon className="h-5 w-5" stroke="2" />
			</Link>
			{/* )} */}
			{/* {user && !user.email_verified_at && (
				<Popover>
					<PopoverTrigger asChild>
						<div className="mt-8 flex cursor-pointer items-center gap-1 rounded-full bg-fuchsia-500 px-8 py-2 font-medium text-white hover:ring-4 hover:ring-fuchsia-200">
							Submit For Free <ArrowRight02Icon className="h-5 w-5" stroke="2" />
						</div>
					</PopoverTrigger>
					<VerifyEmailPopover user={user} />
				</Popover>
			)} */}
			<p className="mt-2 text-xs font-medium text-neutral-400">{hasCount ? `${remaining} free spots left` : '...'}</p>

			<div className="lg:4/5 mx-8 mt-12 flex flex-col gap-6 md:grid md:grid-cols-3 xl:w-3/5">
				<div className="flex w-full flex-col items-center rounded-xl border border-neutral-200 p-4">
					<img src="/graphics/reach_more_people.svg" alt="Reach More People" className="w-full rounded-lg border border-[#eee]" />
					<h3 className="mt-4 font-bold text-black">Reach More People</h3>
					<p className="text-neural-600 mt-2 px-2 text-center text-sm">Let more people know about your deals to increase sales</p>
				</div>
				<div className="flex w-full flex-col items-center rounded-xl border border-neutral-200 p-4">
					<img src="/graphics/zero_commission.svg" alt="Zero Commission" className="w-full rounded-lg border border-[#eee]" />
					<h3 className="mt-4 font-bold text-black">Zero Commission</h3>
					<p className="text-neural-600 mt-2 px-2 text-center text-sm">All payments happen on your own website so we get nothing</p>
				</div>
				<div className="flex w-full flex-col items-center rounded-xl border border-neutral-200 p-4">
					<img src="/graphics/scale_your_business.svg" alt="Scale Your Business" className="w-full rounded-lg border border-[#eee]" />
					<h3 className="mt-4 font-bold text-black">Drive Business Growth</h3>
					<p className="text-neural-600 mt-2 px-2 text-center text-sm">Get the capital and feedback you need to reach the next level</p>
				</div>
			</div>

			<div className="mt-32 w-full md:w-5/6 lg:w-4/5 xl:w-3/5">
				<h2 className="w-full text-center text-2xl font-bold">Frequently Asked Questions</h2>
				<Accordion type="multiple" collapsible="true" className="mt-6">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-start text-lg font-semibold md:text-xl">Is listing on Appdeals really free?</AccordionTrigger>
						<AccordionContent className="text-base text-neutral-600 md:text-lg">
							Yes, the first 100 deals can be submitted for free. After 100 deals, a one time fee of 10 or 15 USD will be charged per listing.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="text-start text-lg font-semibold md:text-xl">
							Does Appdeals charge any commision on deals?
						</AccordionTrigger>
						<AccordionContent className="text-base text-neutral-600 md:text-lg">
							No, Appdeals only lists your deal and redirects the user to the checkout page on your own website. You handle all the payments while
							we get nothing.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="text-start text-lg font-semibold md:text-xl">How long can I list my deal?</AccordionTrigger>
						<AccordionContent className="text-base text-neutral-600 md:text-lg">
							Your deals can be listed for a maximum of 30 days. After 30 days, your deal will be automatically removed. However, you can resubmit
							your deal when it expires.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger className="text-start text-lg font-semibold md:text-xl">How many deals can I submit?</AccordionTrigger>
						<AccordionContent className="text-base text-neutral-600 md:text-lg">
							Currently, you can only submit 1 deal per day. We are working to increase this limit.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger className="text-start text-lg font-semibold md:text-xl">Can I edit my listings after submission?</AccordionTrigger>
						<AccordionContent className="text-base text-neutral-600 md:text-lg">
							We&apos;re actively working on allowing you to edit your submissions and manage them using our API. In the meantime you can reachout
							to us at{' '}
							<Link href="mailto:support@appdeals.pro" className="text-fuchsia-500">
								support@appdeals.pro
							</Link>{' '}
							to request modifications in your listing.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
