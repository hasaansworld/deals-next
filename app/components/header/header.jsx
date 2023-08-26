import Image from 'next/image';
import ActionButton from '../action-button/action-button';

const Header = () => {
	return (
		<header className="fixed left-0 top-0 w-full bg-gray-300/10 py-2 z-10 backdrop-filter backdrop-blur-xl">
			<div className="container mx-auto flex items-center justify-between px-40">
				<div className="flex items-center space-x-2">
					<Image src="/favicon.ico" alt="Logo" width={192} height={192} className="mr-2 h-10 w-10" />
					<h1 className="text-xl font-semibold text-gray-800 hover:text-gray-900">AppStore</h1>
				</div>

				<div className="flex items-center space-x-6">
					<button class="text-md rounded-xl px-4 py-2 font-semibold text-gray-900 hover:bg-gray-100">Log in</button>
					<ActionButton text="Add Listing" param="add-listing" size="small" textSize="text-sm" />
				</div>
			</div>
		</header>
	);
};

export default Header;
