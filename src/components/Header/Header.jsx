import React from "react";

// styled components
import { StyledHeader, StyledDescription, StyledTitle } from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>USERS CATALOGUE</StyledTitle>
      <StyledDescription>
        This page shows a list of the current users available in our system. it
        also embodies the specific details peculiar to each user.
      </StyledDescription>
    </StyledHeader>
  );
};

export default Header;
