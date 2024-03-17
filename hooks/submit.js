import useSWR from 'swr';

export default function useSubmit() {
	const { data: count } = useSWR('/api/listings-count', () => fetch('/api/submit/listings-count').then((res) => res.json()));
	return { count };
}
