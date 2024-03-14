import axios from '@/lib/axios';
import useSWR from 'swr';

export default function useSubmit() {
	const { data, error, isLoading } = useSWR('/api/listings-count', () => axios.get('/api/listings-count').then((res) => res.data));
	return { data, error, isLoading };
}
