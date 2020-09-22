import React, {
  useEffect,
  createContext,
  useReducer,
  useMemo,
  useCallback,
} from "react";

import initialState from "../utils/initialState";
import usersReducer from "./reducer";
import fetchUsers from "../utils/fetchUsers";
import { USERS_URL } from "../utils/constants";

// helpers
import { retrieveState, saveState } from "../utils/localStorage";

const noOp = () => {};

// create context
export const UsersContext = createContext({
  users: null,
  setUsers: null,
  getUsers: noOp,
});

// context provider
export const UsersProvider = ({ children }) => {
  const appState = retrieveState("state") || initialState;

  const [state, dispatch] = useReducer(usersReducer, appState);

  // get users function
  const getUsers = useCallback(() => fetchUsers(USERS_URL, dispatch), []);

  // store state on localStorage
  useEffect(() => {
    saveState("state", state);
  }, [state]);

  //
  const providerValue = useMemo(() => ({ state, getUsers }), [state, getUsers]);

  return (
    <UsersContext.Provider value={providerValue}>
      {children}
    </UsersContext.Provider>
  );
};
