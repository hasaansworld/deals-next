'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Add01Icon from '../icons/add';
import AddSquareIcon from '../icons/add_square';
import DashboardCircleIcon from '../icons/dashboard_circle';
import DiscoverCircleIcon from '../icons/discover_circle';
import Home03Icon from '../icons/home';
import Home03IconSolid from '../icons/home_solid';
import QuillWrite02Icon from '../icons/quill_write';

const Navigation = () => {
	const pathname = usePathname();

	return (
		<div className="h-screen w-full overflow-y-auto px-3 py-20">
			<Link href="/">
				<div className={`flex w-full items-center gap-3 rounded-lg ${pathname === '/' ? 'bg-neutral-100' : 'hover:bg-neutral-100'} px-3 py-2`}>
					{pathname === '/' ? <Home03IconSolid className="h-5 w-5" /> : <Home03Icon className="h-5 w-5 text-neutral-600" />}
					<p className={`${pathname === '/' ? 'font-medium text-black' : 'text-neutral-600'}`}>Home</p>
				</div>
			</Link>
			<Link href="/submit">
				<div
					className={`mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 ${
						pathname === '/submit' ? 'bg-fuchsia-100' : ''
					} hover:bg-fuchsia-100`}
				>
					<AddSquareIcon className="h-5 w-5 text-fuchsia-500" stroke="1.5" />
					<p className="text-fuchsia-500">Submit</p>
				</div>
			</Link>
			<div className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-neutral-100">
				<DashboardCircleIcon className="h-5 w-5 text-neutral-600" />
				<p className="text-neutral-600">Categories</p>
			</div>
		</div>
	);
};

export default Navigation;
