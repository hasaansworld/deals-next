import '../styles/globals.css';

export default function Page() {
	const repeatedContent = Array(10).fill(null);

	return (
		<>
			<div className="mt-6 flex flex-col items-center py-10">
				<div className="flex-1 overflow-y-auto">
					{repeatedContent.map((item, index) => (
						<div
							key={index}
							className="mt-5 flex min-h-[400px] min-w-[600px] items-center justify-center rounded-lg border border-[#1a1a1a] bg-[#040404]"
						>
							<p className="text-white">Hello Post {index}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
