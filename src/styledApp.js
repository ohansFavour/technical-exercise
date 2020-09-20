import styled from "styled-components";

const StyledApp = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    max-width: 1200px;
  }
`;
export const StyledAppError = styled.p`
  color: red;
`;

export default StyledApp;
