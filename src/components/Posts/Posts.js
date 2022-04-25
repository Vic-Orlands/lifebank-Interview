import React from 'react';
import Pagination from '../../utils/pagination/Pagination';
import classes from './Posts.module.css';

import useFetch from '../../api/useFetch';

const Posts = () => {
	const { posts, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

	if (loading) return <p> Loading... </p>;
	if (error) return <p> Error :( </p>;

	return (
		<div className={classes['post']}>
			{posts ? <Pagination data={posts} pageLimit={5} dataLimit={10} /> : <h2>No available posts...</h2>}
		</div>
	);
};

export default Posts;
