const Sad01Icon = ({ stroke = '1.5', ...props }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={'none'} {...props}>
		<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
		<path
			d="M8 17C8.91212 15.7856 10.3643 15 12 15C13.6357 15 15.0879 15.7856 16 17"
			stroke="currentColor"
			strokeWidth={stroke}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path d="M8.00897 9H8M16 9H15.991" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export default Sad01Icon;
