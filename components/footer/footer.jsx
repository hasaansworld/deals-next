import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="mt-10 w-full bg-gray-50">
			<div className="grid grid-cols-2 items-start gap-3 px-60 py-20">
				<Link href="/pricing">
					<h5 className="cursor-pointer font-medium text-neutral-600 hover:underline">Pricing</h5>
				</Link>
				<Link href="/blog">
					<h5 className="cursor-pointer font-medium text-neutral-600 hover:underline">Blog</h5>
				</Link>
				<Link href="/faqs">
					<h5 className="cursor-pointer font-medium text-neutral-600 hover:underline">FAQs</h5>
				</Link>
				<Link href="/terms">
					<h5 className="cursor-pointer font-medium text-neutral-600 hover:underline">Terms & Conditions</h5>
				</Link>
				<Link href="/about-us">
					<h5 className="cursor-pointer font-medium text-neutral-600 hover:underline">Who Are We?</h5>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
