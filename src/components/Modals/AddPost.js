import React from 'react';
import classes from './AddPost.module.css';

import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';

import { addPost } from '../../redux/actions/postsActions';

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

const AddPost = ({ onclose, open, addPost }) => {
	const formik = useFormik({
		initialValues: {
			id: nanoid(),
			title: '',
			body: ''
		},
		validate,
		onSubmit: (values) => {
			addPost(values);
			window.location.reload();
		}
	});

	const hideModal = (e) => {
		e.preventDefault();
		onclose && onclose(e);
	};

	if (!open) {
		return null;
	}

	return (
		<div className={classes['add-modal']}>
			<section className={classes['add-modal-container']}>
				<h5>Add new Post</h5>

				<hr />

				<form onSubmit={formik.handleSubmit} className={classes['form']}>
					<label htmlFor="title">
						Post Title
						<input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} />
						{formik.errors.title ? (
							<div style={{ color: 'red', fontSize: 15 }}>{formik.errors.title}</div>
						) : null}
					</label>

					<label htmlFor="body">
						Post body
						<input type="text" name="body" value={formik.values.body} onChange={formik.handleChange} />
						{formik.errors.body ? (
							<div style={{ color: 'red', fontSize: 15 }}>{formik.errors.body}</div>
						) : null}
					</label>

					<div className={classes['button-group']}>
						<button onClick={hideModal} type="button">
							Cancel
						</button>
						<button onClick={addPost} type="submit">
							Add Post
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default connect(null, { addPost })(AddPost);
