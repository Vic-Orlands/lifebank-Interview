import React from 'react';
import classes from './Home.module.css';

import Posts from '../Posts/Posts';

const Home = () => {
	return (
		<div className={classes['home-container']}>
			<h2>All Posts</h2>

			<Posts />
		</div>
	);
};

export default Home;
