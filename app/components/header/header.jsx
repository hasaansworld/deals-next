'use client';

import Image from 'next/image';
import ActionButton from '../action-button/action-button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import FlatButton from '../action-button/flat-button';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathName = usePathname();

	console.log(pathName);

	return (
		<header className="fixed left-0 top-0 z-10 w-full bg-black/10 py-2 backdrop-blur-2xl backdrop-filter">
			<div className="container mx-auto flex items-center px-40">
				<Link href="/" className="flex-1">
					<div className="flex items-center gap-2">
						<Image src="/icon_white.svg" alt="Logo" width={350} height={280} className="h-4 w-5" />
						<h1 className="text-xl font-semibold text-white">arsaa</h1>
					</div>
				</Link>

				<div className="flex w-96 flex-1 items-center space-x-2 rounded-xl border border-neutral-800 bg-transparent px-4 py-1.5 transition-colors duration-300 focus-within:bg-neutral-900">
					<MagnifyingGlassIcon className="h-5 w-5 text-neutral-600" />
					<input className="h-full w-full bg-transparent text-white placeholder-white/30 focus:outline-none" placeholder="Search apps" />
				</div>

				<div className="flex flex-1 items-center space-x-6">
					<FlatButton text="Blog" textColor="white/70" url="blog" textSize="text-base" size="medium" />
					<FlatButton text="Log in" textColor="white/70" url="login" textSize="text-base" size="medium" />
					<ActionButton
						text={pathName === '/add-listing' ? 'Create Listing' : 'Add Listing'}
						url={pathName === '/add-listing' ? 'create-listing' : 'add-listing'}
						size="small"
						textSize="text-sm"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
