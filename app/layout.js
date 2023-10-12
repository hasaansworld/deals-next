import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'arsaa',
	description: 'Coming Soon',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.className}>
			<body className="bg-black">
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
