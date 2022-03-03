import React, { useState } from 'react';
import classes from './Home.module.css';

import Posts from '../Posts/Posts';
import AddPost from '../Modals/AddPost';

const Home = () => {
	const [ addModal, setAddModal ] = useState(false);

	const openAddModal = () => {
		setAddModal(!addModal);
	};

	return (
		<div className={classes['home-container']}>
			<div className={classes['home-header-container']}>
				<h2>All Posts</h2>

				<aside>
					<h5 onClick={openAddModal}>Add New Post</h5>
				</aside>
			</div>

			<Posts />
			<AddPost open={addModal} onclose={openAddModal} />
		</div>
	);
};

export default Home;
