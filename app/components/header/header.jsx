import Image from 'next/image';
import ActionButton from '../action-button/action-button';

const Header = () => {
	return (
		<header className="fixed left-0 top-0 w-full border-b border-gray-200 bg-white py-2">
			<div className="container mx-auto flex items-center justify-between px-40">
				<div className="flex items-center space-x-2">
					<Image src="/favicon.ico" alt="Logo" width={192} height={192} className="mr-2 h-10 w-10" />
					<h1 className="text-xl font-semibold text-gray-800 hover:text-gray-900">SAAS App store</h1>
				</div>

				<div className="flex space-x-6">
					<button class="text-md rounded-xl px-6 py-2 font-semibold text-gray-900 hover:bg-gray-100">Log in</button>
					<ActionButton text="Add Listing" param="add-listing" />
				</div>
			</div>
		</header>
	);
};

export default Header;
