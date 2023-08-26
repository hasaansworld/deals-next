import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from './components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'App Store',
	description: 'Coming Soon',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<div className="relative h-screen overflow-hidden">
					<Header />
					<div className="absolute h-screen w-full overflow-y-auto">{children}</div>
				</div>
			</body>
		</html>
	);
}
