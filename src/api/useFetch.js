import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
	const [ posts, setPosts ] = useState(null);
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			const fetchData = async () => {
				setLoading(true);
				try {
					const res = await axios.get(url);
					setPosts(res.data);
					setLoading(false);
				} catch (error) {
					setError(error);
					setLoading(false);
				}
			};

			fetchData();
		},
		[ url ]
	);

	return { posts, error, loading };
}
