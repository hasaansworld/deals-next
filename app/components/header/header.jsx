import Image from 'next/image';
import ActionButton from '../action-button/action-button';
import Link from 'next/link';
import FlatButton from '../action-button/flat-button';

const Header = () => {
	return (
		<header className="fixed left-0 top-0 z-10 w-full bg-gray-300/10 py-2 backdrop-blur-2xl backdrop-filter">
			<div className="container mx-auto flex items-center justify-between px-40">
				<Link href="/">
					<div className="flex items-center gap-1">
						<Image src="/favicon.ico" alt="Logo" width={192} height={192} className="h-10 w-10" />
						<h1 className="text-xl font-semibold text-gray-800 hover:text-gray-900">AppStore</h1>
					</div>
				</Link>

				<div className="flex items-center space-x-6">
					<FlatButton text="Log in" textColor="text-gray-800" textSize="text-base" />
					<ActionButton text="Add Listing" param="add-listing" size="small" textSize="text-sm" />
				</div>
			</div>
		</header>
	);
};

export default Header;
