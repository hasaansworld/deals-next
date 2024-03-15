import Image from 'next/image';
import Link from 'next/link';
import Mail01Icon from '../icons/mail';
import AddSquareIcon from '../icons/add_square';

const Footer = () => {
	return (
		<footer className="mt-10 w-full bg-gray-50 px-6 py-10">
			<div className="flex items-start justify-between gap-4 md:mx-auto md:w-[700px] md:flex-row md:items-center lg:w-[800px]">
				<div>
					<div className="flex items-center justify-center gap-2 md:gap-4">
						<img src="/logo_black.svg" alt="Appdeals logo dark" className="h-6 w-6" />
						<p className="text-lg font-semibold text-neutral-400">Appdeals</p>
						<p className="font-medium text-neutral-400">© 2024</p>
					</div>
					<p className="mt-2 text-neutral-600 md:hidden">
						Built by{' '}
						<Link href="https://x.com/@techh2s" target="blank" className="text-fuchsia-500">
							Hasaan Ahmed
						</Link>
					</p>
				</div>
				<div className="items-center gap-6 md:flex md:gap-20 lg:gap-32">
					<Link href="mailto:support@appdeals.pro" className="flex items-center gap-2 text-neutral-600 md:min-w-min">
						<Mail01Icon className="h-5 w-5" stroke="2" />
						Contact Us
					</Link>
					<Link href="/submit" className="mt-2 flex items-center gap-2 text-neutral-600 md:mt-0">
						<AddSquareIcon className="h-5 w-5" stroke="2" />
						Submit
					</Link>
				</div>

				<p className="hidden text-neutral-600 md:block">
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
