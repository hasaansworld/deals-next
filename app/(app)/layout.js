import { onest } from '@/app/fonts';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Navigation from '@/components/navigation/navigation';

export const metadata = {
	title: 'Appdeals',
	description: 'Best software deals and discounts. Get high quality software for lower prices.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={onest.className}>
			<body className="overflow-hidden bg-white">
				<Header />
				<div className="h-screen w-full overflow-y-auto">
					{/* <div className="h-screen w-[220px] border-r border-[#eee]">
								<div className="fixed w-[220px]">
									<Navigation />
								</div>
							</div> */}
					<div className="min-h-[90vh] flex-1">{children}</div>
					<Footer />
					{/* <div className="w-[220px]">
								<div className="fixed w-[220px]">
									<Footer />
								</div>
							</div> */}
				</div>
			</body>
		</html>
	);
}
