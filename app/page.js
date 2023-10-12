import '../styles/globals.css';

export default function Page() {
	const repeatedContent = Array(10).fill(null);

	return (
		<>
			<div className="relative mt-20 flex flex-col items-center py-10">
				<div className="fixed top-12 h-auto w-full bg-black/10 p-4 backdrop-blur-2xl backdrop-filter">
					<div className="mx-auto flex w-[500px] items-center">
						<p className="rounded-md bg-[#222] px-4 py-1 font-medium text-white">For You</p>
					</div>
				</div>
				<div className="flex-1 overflow-y-auto">
					{repeatedContent.map((item, index) => (
						<div key={index} className="mt-5 flex min-h-[400px] min-w-[500px] items-center justify-center rounded-lg border border-[#222]">
							<p className="text-white">Hello Post {index}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
