import React, { useEffect, useContext } from "react";

// components
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import Summary from "./components/Summary/Summary";
import Users from "./components/Users/Users";

// context
import { UsersContext } from "./context/store";

// Styled-components
import StyledApp, { StyledAppError } from "./styledApp";

const App = () => {
  const {
    getUsers,
    state: { isFetching, error },
  } = useContext(UsersContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <StyledApp>
      <Header />

      {/* App fetching data */}
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <Summary />
          <Users />
        </>
      )}

      {/* When error occurs */}
      {error ? (
        <StyledAppError>
          {error}, please check your connection and reload page
        </StyledAppError>
      ) : null}
    </StyledApp>
  );
};

export default App;
