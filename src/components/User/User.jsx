import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// constants
import { FALBACK_IMAGE_URL } from "../../utils/constants";

// styled components
import {
  StyledContent,
  StyledDefault,
  StyledArrow,
  StyledEmail,
  StyledImage,
  StyledMore,
  StyledMoreItem,
  StyledUser,
  StyledName,
  StyledStar,
  StyledDetails,
  StyledMoreTitle,
  StyledMoreValue,
} from "./StyledUser";

const User = ({ item }) => {
  const {
    cached_avatar,
    name,
    email,
    style,
    stats: { published_campaigns_count, invited_users_count },
    updated_at,
    created_at,
  } = item;

  const [show, setShow] = useState(false);

  // toggle
  const toggleShow = () => {
    setShow(!show);
  };

  // star color theming
  const theme = {
    starColor: style === "owner" ? "#4c8bf5" : "#F4B400",
    show,
  };

  // Add a fallback image (just once), in case of errors
  let once = true;
  const handleError = (e) => {
    if (once) {
      e.target.onError = null;
      e.target.src = FALBACK_IMAGE_URL;
    }
    once = false;
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledUser data-testid="user">
        <StyledImage
          src={cached_avatar}
          alt={`${name}`}
          onError={handleError}
        />
        <StyledContent>
          <StyledDefault>
            <StyledName>
              {name} <StyledStar>&#9734;</StyledStar>
            </StyledName>
            <StyledDetails>
              <StyledEmail>{email}</StyledEmail>
              <StyledArrow onClick={toggleShow}>
                {" "}
                {!show ? <>&#9650;</> : <>&#9660;</>}{" "}
              </StyledArrow>
            </StyledDetails>
          </StyledDefault>
          <StyledMore>
            <StyledMoreItem>
              <StyledMoreTitle>Style:</StyledMoreTitle>{" "}
              <StyledMoreValue>{style}</StyledMoreValue>
            </StyledMoreItem>
            <StyledMoreItem>
              <StyledMoreTitle>Invited:</StyledMoreTitle>{" "}
              <StyledMoreValue>{invited_users_count}</StyledMoreValue>{" "}
            </StyledMoreItem>
            <StyledMoreItem>
              <StyledMoreTitle> Published:</StyledMoreTitle>{" "}
              <StyledMoreValue>
                {" "}
                {published_campaigns_count ? (
                  <>{published_campaigns_count}</>
                ) : (
                  "0"
                )}
              </StyledMoreValue>
            </StyledMoreItem>
            <StyledMoreItem>
              <StyledMoreTitle>Created:</StyledMoreTitle>{" "}
              <StyledMoreValue>{created_at}</StyledMoreValue>{" "}
            </StyledMoreItem>
            <StyledMoreItem>
              <StyledMoreTitle>Updated:</StyledMoreTitle>{" "}
              <StyledMoreValue>{updated_at}</StyledMoreValue>
            </StyledMoreItem>
          </StyledMore>
        </StyledContent>
      </StyledUser>
    </ThemeProvider>
  );
};

export default User;
