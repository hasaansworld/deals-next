import { onest } from './fonts';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

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
					<div className="absolute h-screen w-full">
						{children}
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
