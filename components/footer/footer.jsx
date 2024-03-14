import Image from 'next/image';
import Link from 'next/link';
import Mail01Icon from '../icons/mail';

const Footer = () => {
	return (
		<footer className="mt-10 w-full bg-gray-50 px-6 py-10">
			<div className="mx-auto flex w-[800px] items-center justify-between">
				<div className="flex items-center justify-center gap-4">
					<img src="/logo_black.svg" alt="Appdeals logo dark" className="h-6 w-6" />
					<p className="text-lg font-semibold text-neutral-400">Appdeals</p>
					<p className="font-medium text-neutral-400">© 2024</p>
				</div>
				<Link href="mailto:support@appdeals.pro" className="flex items-center gap-2 text-neutral-600">
					<Mail01Icon className="h-5 w-5" stroke="2" />
					Contact Us
				</Link>
				<p className="text-neutral-600">
					Built by{' '}
					<Link href="https://x.com/@techh2s" target="blank" className="text-fuchsia-500">
						Hasaan Ahmed
					</Link>
				</p>
				{/* <div className="grid grid-cols-2 items-start gap-3">
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
				</div> */}
			</div>
		</footer>
	);
};

export default Footer;
