import actionTypes from '../constants/postsActionTypes';

const initialState = {
	posts: []
};

export const postsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.FETCH_POSTS:
			return {
				...state,
				posts: payload
			};
		case actionTypes.ADD_POST:
			return [ ...state, payload ];
		default:
			return state;
	}
};
