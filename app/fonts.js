import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const onest = localFont({
	src: './fonts/onest_variable.ttf',
	subsets: ['latin'],
});
export const brics = localFont({
	src: './fonts/bricolage_grotesque_variable.ttf',
	subsets: ['latin'],
});
