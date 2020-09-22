import initialState from "../utils/initialState";
import userTypes from "./types";

// types
const {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  IS_FETCHING_USERS,
} = userTypes;

// Reducer
const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case IS_FETCHING_USERS:
      return { ...state, isFetching: true, error: null };

    case FETCH_USERS_FAILURE:
      return { ...state, isFetching: false, error: payload };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: payload,
        error: null,
      };

    default:
      return state;
  }
};

export default usersReducer;
