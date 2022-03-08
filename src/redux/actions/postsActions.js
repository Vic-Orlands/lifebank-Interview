import actionTypes from '../constants/postsActionTypes';
import axiosInstance from '../../api/fetchPostsApi';

export const fetchPosts = () => async (dispatch) => {
	const response = await axiosInstance.get('posts');
	dispatch({
		type: actionTypes.FETCH_POSTS,
		payload: response.data
	});
};

export const addPost = (postObj) => async (dispatch) => {
	const response = await axiosInstance.post('posts', postObj);
	dispatch({
		type: actionTypes.ADD_POST,
		payload: response
	});
};

export const editPost = (postObj, id) => async (dispatch) => {
	const response = await axiosInstance.put(`posts/${id}`, postObj);
	dispatch({
		type: actionTypes.EDIT_POST,
		payload: response
	});
};

export const deletePost = (id) => async (dispatch) => {
	const response = await axiosInstance.delete(`posts/${id}`);
	dispatch({
		type: actionTypes.DELETE_POST,
		payload: response.data
	});
};
