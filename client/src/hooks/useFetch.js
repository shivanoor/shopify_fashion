import { useEffect, useState } from "react";
import { request } from "../request";
const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await request.get(url);
				setData(res.data.data);
			} catch (error) {
				setError(true);
			}
			setLoading(false);
		};
		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
