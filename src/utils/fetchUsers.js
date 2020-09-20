import {
  fetchingFailure,
  fetchingSuccess,
  isFetching,
} from "../context/actions";

const fetchUsers = async (url, dispatch) => {
  try {
    dispatch(isFetching());
    const response = await fetch(url);
    const users = await response.json();
    dispatch(fetchingSuccess(users));
  } catch (err) {
    dispatch(fetchingFailure(err.message));
  }
};

export default fetchUsers;
