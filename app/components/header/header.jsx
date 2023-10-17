'use client';

import Image from 'next/image';
import ActionButton from '../action-button/action-button';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import FlatButton from '../action-button/flat-button';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathName = usePathname();

	console.log(pathName);

	return (
		<header class="fixed left-0 right-0 top-0 z-10 border-b border-[#aaa]/10 bg-white/10 py-2 backdrop-blur-2xl backdrop-filter">
			<nav>
				<div className="container mx-auto flex items-center justify-center">
					<Link href="/">
						<div className="flex items-center gap-2">
							<img src="/icon_black.svg" alt="Logo" className="h-5 w-5" />
							<h1 className="text-lg font-bold text-black">Arsaa</h1>
						</div>
					</Link>

					<p class="mx-9 w-[400px] rounded-lg border border-[#666]/10 bg-[#f6f6f6]/10 px-3 py-1 font-medium text-[#888]">Search apps</p>
					<div class="mr-10">
						<BellIcon className="h-6 w-6 text-black" />
					</div>

					<img src="profile3.jpg" class="h-8 w-8 rounded-full border border-[#eee]" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
