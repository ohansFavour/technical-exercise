import React, { useEffect, useContext } from "react";

// components
import Header from "./components/Header/Header";
import LoadingBubble from "./components/LoadingBubble/LoadingBubble";
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
  }, [getUsers]);

  return (
    <StyledApp>
      <Header />

      {/* When error occurs */}
      {error ? (
        <StyledAppError>
          {error}, please check your connection and reload page
        </StyledAppError>
      ) : (
        <>
          {/* App fetching data */}
          {isFetching ? (
            <LoadingBubble />
          ) : (
            <>
              <Summary />
              <Users />
            </>
          )}
        </>
      )}
    </StyledApp>
  );
};

export default App;
