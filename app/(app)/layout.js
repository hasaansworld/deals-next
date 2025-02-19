import { onest } from '@/app/fonts';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Navigation from '@/components/navigation/navigation';
import Script from 'next/script';

export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
	title: 'Appdeals',
	description:
		'Unbeatable deals on high quality software curated by humans. Boost your workflows and increase your productivity with our selection of top tier apps and software tools.',
	openGraph: {
		title: 'Appdeals - Best Software Deals And Discounts',
		description:
			'Unbeatable deals on high quality software curated by humans. Boost your workflows and increase your productivity with our selection of top tier apps and software tools.',
		images: [{ url: '/graphics/og_image.png', width: 1200, height: 630, alt: 'AppDeals - Best Software Deals And Discounts' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Appdeals - Best Software Deals And Discounts',
		creator: '@appdeals_pro',
		description:
			'Unbeatable deals on high quality software curated by humans. Boost your workflows and increase your productivity with our selection of top tier apps and software tools.',
		images: [{ url: '/graphics/og_image.png', width: 1200, height: 630, alt: 'AppDeals - Best Software Deals And Discounts' }],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={onest.className}>
			<head>
				{/*<!-- Google tag (gtag.js) -->*/}
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-XDQLP3CGH1" />
				<Script id="google-analytics">
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
				`}
				</Script>
			</head>
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
