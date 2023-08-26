import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="min-h-60 w-full bg-indigo-50/50 p-16">
			<div className="w-6/7 3xl:w-1/2 mx-auto flex items-start justify-between lg:w-5/6 2xl:w-3/5">
				<div className="flex flex-col items-center">
					<Image src="/favicon.ico" alt="Logo" width={192} height={192} className="h-20 w-20" />
					<h3 className="text-xl font-medium">AppStore</h3>
				</div>
				<div>
					<h5 className="cursor-pointer text-lg font-medium text-gray-900 hover:underline">Pricing</h5>
					<h5 className="mt-4 cursor-pointer text-lg font-medium text-gray-900 hover:underline">Blog</h5>
					<h5 className="mt-4 cursor-pointer text-lg font-medium text-gray-900 hover:underline">FAQs</h5>
				</div>
				<div>
					<h5 className="cursor-pointer text-lg font-medium text-gray-900 hover:underline">Terms & Conditions</h5>
					<h5 className="mt-4 cursor-pointer text-lg font-medium text-gray-900 hover:underline">Who Are We?</h5>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
