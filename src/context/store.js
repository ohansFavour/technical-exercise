import React, { useEffect, createContext, useReducer } from "react";

import initialState from "../utils/initialState";
import usersReducer from "./reducer";
import fetchUsers from "../utils/fetchUsers";
import { USERS_URL } from "../utils/constants";

// helpers
import { retrieveState, saveState } from "../utils/localStorage";

// create context
export const UsersContext = createContext({
  users: null,
  setUsers: null,
  getUsers: () => {},
});

// context provider
export const UsersProvider = ({ children }) => {
  const appState = retrieveState("state") || initialState;

  const [state, dispatch] = useReducer(usersReducer, appState);

  const getUsers = () => fetchUsers(USERS_URL, dispatch);

  // store state on localStorage
  useEffect(() => {
    saveState("state", state);
  }, [state]);

  return (
    <UsersContext.Provider value={{ state, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
