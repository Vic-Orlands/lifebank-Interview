import React, { useState, useEffect } from 'react';
import classes from './Posts.module.css';
import EditPost from '../Modals/EditPost';

// --------import state and fetch action from redux--------
import { connect, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from '../../redux/actions/postsActions';

const Posts = ({ posts, fetchPosts }) => {
	const dispatch = useDispatch();
	const [ edit, setEdit ] = useState(false);

	useEffect(() => {
		fetchPosts();
	}, []);

	const openEditModal = (e) => {
		e.preventDefault();
		setEdit(!edit);
	};

	const handleDeletePost = (id) => {
		dispatch(deletePost(id));
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	};

	return (
		<div>
			{posts &&
				posts.map((post, index) => (
					<section key={post.id}>
						<h3 className={classes['post-heading']}>
							<span>{index + 1}: </span>
							{post.title}
						</h3>
						<p className={classes['post-paragraph']}>{post.body}</p>

						<button
							className={classes['post-button']}
							onClick={() =>
								setEdit({
									edit: !edit,
									id: post.id
								})}
						>
							Edit Post
						</button>
						<button className={classes['post-button-delete']} onClick={() => handleDeletePost(post.id)}>
							Delete Post
						</button>
					</section>
				))}

			<EditPost isOpen={edit} onClose={openEditModal} />
		</div>
	);
};

const mapStateToProps = ({ posts }) => {
	const normalizePost = posts.posts.slice(0, 20);
	return {
		posts: normalizePost
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPosts: () => dispatch(fetchPosts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
