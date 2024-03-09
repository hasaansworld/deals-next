import { onest } from '@/app/fonts';
import '@/styles/globals.css';
import Link from 'next/link';

export const metadata = {
	title: 'Appdeals',
	description: 'Best software deals and discounts. Get high quality software for lower prices.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={onest.className}>
			<body className="bg-white">
				<div className="relative h-screen w-full">
					<header className="fixed left-0 right-0 top-0 z-10 border-b border-[#777]/10 bg-white/10 backdrop-blur-2xl backdrop-filter">
						<div className="flex w-full justify-center py-3">
							<Link href="/">
								<div className="flex items-center gap-2">
									<img src="/logo.svg" alt="Logo" className="h-6 w-6" />
									<h1 className="text-lg font-bold text-black">Appdeals</h1>
								</div>
							</Link>
						</div>
					</header>
					<div className="h-screen w-full items-center justify-center p-20">{children}</div>
				</div>
			</body>
		</html>
	);
}
