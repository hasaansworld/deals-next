import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="min-h-60 w-full bg-white/5 p-16">
			<div className="w-6/7 3xl:w-1/2 mx-auto flex items-start justify-between lg:w-5/6 2xl:w-3/5">
				<div className="flex flex-col items-center">
					<Image src="/icon_white.svg" alt="Logo" width={350} height={280} className="w-12" />
					<h3 className="mt-2 text-2xl font-semibold text-white">arsaa</h3>
				</div>
				<div>
					<Link href="/pricing">
						<h5 className="cursor-pointer text-lg font-medium text-gray-300 hover:underline">Pricing</h5>
					</Link>
					<Link href="/blog">
						<h5 className="mt-4 cursor-pointer text-lg font-medium text-gray-300 hover:underline">Blog</h5>
					</Link>
					<Link href="/faqs">
						<h5 className="mt-4 cursor-pointer text-lg font-medium text-gray-300 hover:underline">FAQs</h5>
					</Link>
				</div>
				<div>
					<Link href="/terms">
						<h5 className="cursor-pointer text-lg font-medium text-gray-300 hover:underline">Terms & Conditions</h5>
					</Link>
					<Link href="/about-us">
						<h5 className="mt-4 cursor-pointer text-lg font-medium text-gray-300 hover:underline">Who Are We?</h5>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
