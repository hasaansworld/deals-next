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
		<header className="fixed left-0 right-0 top-0 z-10 border-b border-[#161616] bg-[#555]/10 py-2 backdrop-blur-2xl backdrop-filter">
			<div className="container mx-auto flex items-center px-60">
				<Link href="/" className="flex-1">
					<div className="flex items-center gap-2">
						<Image src="/icon_white.svg" alt="Logo" width={350} height={280} className="h-4 w-5" />
						<h1 className="text-xl font-semibold text-white">arsaa</h1>
					</div>
				</Link>

				<div className="flex w-[450px] items-center space-x-2 rounded-xl border border-white/10 bg-transparent px-4 py-1.5 transition-colors duration-300 focus-within:bg-neutral-900">
					<MagnifyingGlassIcon className="h-5 w-5 text-neutral-600" />
					<input className="h-full w-full bg-transparent text-white placeholder-white/30 focus:outline-none" placeholder="Search software" />
				</div>

				<div className="flex flex-1 items-center justify-end gap-8">
					<BellIcon className="h-6 w-6 text-neutral-300" />
					<Image src="/profile.jpg" alt="profile pic" width={400} height={400} className="h-8 w-8 rounded-full border-2 border-[#444]" />
				</div>
			</div>
		</header>
	);
};

export default Header;
