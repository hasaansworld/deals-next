import '../styles/globals.css';
import { brics, inter } from './fonts';
import Post from '../components/post/post';
import Listing from '../components/listing/listing';

export default function Page() {
	const repeatedContent = Array(10).fill(null);

	return (
		<>
			<div className="flex w-full flex-col items-center px-20 py-10">
				<h2 className={`mt-16 flex justify-center text-2xl font-bold text-black`}>Best Software Deals And Discounts</h2>
				<p className="mb-14 text-gray-500">Get high quality software on lower prices.</p>

				<div className="grid grid-cols-5 gap-6">
					{repeatedContent.map((item, index) => (
						<Listing index={index} key={index} />
					))}
				</div>
			</div>
		</>
	);
}
