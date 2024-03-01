'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Notification03Icon from '../icons/notification';

const Header = () => {
	const pathName = usePathname();

	console.log(pathName);

	return (
		<header className="fixed left-0 right-0 top-0 z-10 border-b border-[#777]/10 bg-white/10 py-2 backdrop-blur-2xl backdrop-filter">
			<nav>
				<div className="container mx-auto flex items-center justify-center">
					<Link href="/">
						<div className="flex items-center gap-2">
							<img src="/icon_black.svg" alt="Logo" className="h-5 w-5" />
							<h1 className="text-lg font-bold text-black">Arsaa</h1>
						</div>
					</Link>

					<p className="mx-9 w-[400px] rounded-lg border border-[#666]/10 bg-[#f6f6f6]/10 px-3 py-1 font-medium text-[#888]">Search apps</p>

					<div className="mr-10">
						<Notification03Icon className="h-5 w-5 text-black" />
					</div>

					<img src="profile3.jpg" className="h-8 w-8 rounded-full border border-[#eee]" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
