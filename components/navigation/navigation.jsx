'use client';

import Link from 'next/link';
import Add01Icon from '../icons/add';
import AddSquareIcon from '../icons/add_square';
import DiscoverCircleIcon from '../icons/discover_circle';
import Home03IconSolid from '../icons/home';
import QuillWrite02Icon from '../icons/quill_write';

const Navigation = () => {
	return (
		<div className="h-screen w-full overflow-y-auto px-3 py-20">
			<Link href="/">
				<div className="flex w-full items-center gap-3 rounded-lg bg-neutral-100 p-3">
					<Home03IconSolid className="h-5 w-5" />
					<p className="font-medium text-black">Home</p>
				</div>
			</Link>
			<div className="mt-2 flex w-full items-center gap-3 rounded-lg p-3 hover:bg-neutral-100">
				<DiscoverCircleIcon className="h-5 w-5 text-neutral-600" />
				<p className="text-neutral-600">Discover</p>
			</div>
			<Link href="/submit">
				<div className="mt-2 flex w-full items-center gap-3 rounded-lg p-3 hover:bg-neutral-100">
					<AddSquareIcon className="h-5 w-5 text-neutral-600" stroke="1.5" />
					<p className="text-neutral-600">Submit</p>
				</div>
			</Link>
		</div>
	);
};

export default Navigation;
