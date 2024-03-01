import { onest } from './fonts';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';

export const metadata = {
	title: 'Arsaa',
	description: 'Coming Soon',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={onest.className}>
			<body className="bg-white">
				<div className="h-screen overflow-y-auto">
					<Header />
					<div className="h-screen w-full">
						<div className="mx-auto flex w-fit items-start gap-12">
							<div className="w-[200px]">
								<Navigation />
							</div>
							<div className="w-[450px]">{children}</div>

							<div className="w-[200px]">
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
