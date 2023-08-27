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
		<header className="fixed left-0 top-0 z-10 w-full bg-gray-300/10 py-2 backdrop-blur-2xl backdrop-filter">
			<div className="container mx-auto flex items-center justify-between px-40">
				<Link href="/">
					<div className="flex items-center gap-1">
						<Image src="/favicon.ico" alt="Logo" width={192} height={192} className="h-10 w-10" />
						<h1 className="text-xl font-semibold text-gray-800 hover:text-gray-900">AppStore</h1>
					</div>
				</Link>

				<div className="mx-32 flex w-96 items-center space-x-2 rounded-xl border border-gray-300 bg-transparent px-4 py-1.5 transition-colors duration-300 focus-within:bg-white/20">
					<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
					<input className="h-full w-full bg-transparent focus:outline-none" placeholder="Search apps" />
				</div>

				<div className="flex items-center space-x-6">
					<FlatButton text="Blog" textColor="test-gray-800" url="blog" textSize="text-base" size="medium" />
					<FlatButton text="Log in" textColor="test-gray-800" url="login" textSize="text-base" size="medium" />
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
