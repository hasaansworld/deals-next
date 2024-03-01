'use client';

import DiscoverCircleIcon from '../icons/discover_circle';
import Home03IconSolid from '../icons/home';

const Navigation = () => {
	return (
		<div className="fixed top-0 w-[200px] py-24">
			<div className="flex w-full items-center gap-3 rounded-lg bg-neutral-100 p-3">
				<Home03IconSolid className="h-5 w-5" />
				<p className="font-medium text-black">Home</p>
			</div>
			<div className="mt-2 flex w-full items-center gap-3 rounded-lg p-3">
				<DiscoverCircleIcon className="h-5 w-5 text-neutral-600" />
				<p className="text-neutral-600">Discover</p>
			</div>
		</div>
	);
};

export default Navigation;
