import React, { useContext } from "react";

// context
import { UsersContext } from "../../context/store";

// components
import User from "../User/User";

// styled components
import { StyledUsers, StyledList, StyledTitle } from "./StyledUsers";

const Users = () => {
  const {
    state: { users },
  } = useContext(UsersContext);

  return (
    <StyledUsers>
      <StyledTitle>List</StyledTitle>
      <StyledList data-testid="users-list">
        {users && users.map((el) => <User key={el.id} item={el} />)}
      </StyledList>
    </StyledUsers>
  );
};

export default Users;
