import React from 'react';
import classes from './AddPost.module.css';

import { connect } from 'react-redux';
import { useFormik } from 'formik';

import { editPost } from '../../redux/actions/postsActions';

// ---------------formik validation check----------------
const validate = (values) => {
	const errors = {};
	if (!values.title) {
		errors.title = 'Required';
	} else if (values.title.length < 5) {
		errors.title = 'Too short';
	}

	if (!values.body) {
		errors.body = 'Required';
	} else if (values.body.length < 10) {
		errors.body = 'Too short';
	}

	return errors;
};

// ---------------Edit Post component starts here----------------
const EditPost = ({ isOpen, onClose, posts, editPost }) => {
	// ---------------formik state--------------
	const formik = useFormik({
		initialValues: {
			title: '',
			body: ''
		},
		validate,
		onSubmit: (values) => {
			editPost(values);
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		}
	});

	// if edit component is not open, return nothing else, open modal with the current post
	if (!isOpen.edit) {
		return null;
	} else {
		const currentPost = posts.posts.filter((post) => post.id === isOpen.id);
		const postTitle = currentPost[0].title;
		const postBody = currentPost[0].body;

		// ---------------handle function to close modal--------------
		const closeModal = (e) => {
			e.preventDefault();
			onClose && onClose(e);
		};

		return (
			<div className={classes['add-modal']}>
				<section className={classes['add-modal-container']}>
					<h5>Edit Post</h5>

					<hr />

					<form onSubmit={formik.handleSubmit} className={classes['form']}>
						<label htmlFor="title">
							Post Title
							<input type="text" name="title" defaultValue={postTitle} onChange={formik.handleChange} />
							{formik.errors.title === null ? (
								<div style={{ color: 'red', fontSize: 15 }}>{formik.errors.title}</div>
							) : null}
						</label>

						<label htmlFor="body">
							Post body
							<input type="text" name="body" defaultValue={postBody} onChange={formik.handleChange} />
							{formik.errors.body === null ? (
								<div style={{ color: 'red', fontSize: 15 }}>{formik.errors.body}</div>
							) : null}
						</label>

						<div className={classes['button-group']}>
							<button onClick={closeModal} type="button">
								Cancel
							</button>
							<button onClick={editPost} type="submit">
								Save Post
							</button>
						</div>
					</form>
				</section>
			</div>
		);
	}
};

const mapStateToProps = ({ posts }) => {
	return {
		posts
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		editPost: (values) => dispatch(editPost(values, props.isOpen.id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
