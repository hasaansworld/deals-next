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
				<>
					<Header />
					{children}
				</>
			</body>
		</html>
	);
}
