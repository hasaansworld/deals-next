import '../styles/globals.css';
import { brics, inter } from './fonts';
import Post from './components/post/post';

export default function Page() {
	const repeatedContent = Array(10).fill(null);

	return (
		<>
			<div className="mx-auto mt-6 flex w-[450px] flex-col items-center py-10">
				<div className="flex-1 overflow-y-auto">
					<h2 className={`${brics.className} my-7 flex justify-center text-2xl font-bold text-black`}>
						Stories from exciting new apps
						<img className="ml-1 h-6 w-6 text-[#5100ff]" src="/star.svg" />
					</h2>
					<div className="w-full">
						{repeatedContent.map((item, index) => (
							<Post index={index} key={index} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
