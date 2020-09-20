import userTypes from "./types";

const {
  IS_FETCHING_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} = userTypes;

export const isFetching = () => ({
  type: IS_FETCHING_USERS,
});

export const fetchingSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchingFailure = (err = "An error ocurred") => ({
  type: FETCH_USERS_FAILURE,
  payload: err,
});
