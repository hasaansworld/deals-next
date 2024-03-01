import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="mt-40 w-full">
			<div className="flex flex-wrap items-start gap-3">
				<Link href="/pricing">
					<h5 className="cursor-pointer text-xs font-medium text-neutral-600 hover:underline">Pricing</h5>
				</Link>
				<Link href="/blog">
					<h5 className="cursor-pointer text-xs font-medium text-neutral-600 hover:underline">Blog</h5>
				</Link>
				<Link href="/faqs">
					<h5 className="cursor-pointer text-xs font-medium text-neutral-600 hover:underline">FAQs</h5>
				</Link>
				<Link href="/terms">
					<h5 className="cursor-pointer text-xs font-medium text-neutral-600 hover:underline">Terms & Conditions</h5>
				</Link>
				<Link href="/about-us">
					<h5 className="cursor-pointer text-xs font-medium text-neutral-600 hover:underline">Who Are We?</h5>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
