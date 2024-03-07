import ArrowRight02Icon from '../../components/icons/arrow_right';
import UserCircle02SolidIcon from '../../components/icons/user_circle_solid';
import UserGroupIcon from '../../components/icons/user_group';

export default function Submit() {
	return (
		<div className="flex flex-col items-center p-20">
			<h1 className="mt-12 text-2xl font-bold text-black">Got Any Deals? Let's Add Them To Arsaa</h1>
			<p className="text-center text-lg text-neutral-400">Share your offerings with the Arsaa community to drive sales and accelerate growth.</p>
			<button className="mt-8 flex items-center gap-1 rounded-full bg-fuchsia-500 px-8 py-2 font-medium text-white hover:gap-2">
				Add Free Listing <ArrowRight02Icon className="h-5 w-5" stroke="2" />
			</button>
			<p className="mt-2 text-xs font-medium text-neutral-400">98 free spots left</p>
			<div className="mt-12 grid w-3/5 grid-cols-3 gap-6">
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
					<h3 className="mt-4 font-bold text-black">Scale Your Business</h3>
					<p className="text-neural-600 mt-2 px-2 text-center text-sm">Get the capital and feedback you need to reach the next level</p>
				</div>
			</div>
		</div>
	);
}
