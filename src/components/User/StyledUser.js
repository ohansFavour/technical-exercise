import styled from "styled-components";

export const StyledUser = styled.div`
  display: flex;
  margin-top: 39px;
  box-sizing: border-box;
  border: solid 1px #f2f2f2;
  border-radius: 5px;
  padding: 5px;
  transition: display 2s linear 1s;
`;
export const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  @media screen and (min-width: 1024px) {
    width: 100px;
    height: 100px;
  }
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
`;
export const StyledDefault = styled.div`
  text-align: center;
`;
export const StyledDetails = styled.div`
  display: flex;
  padding: 11px;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;
export const StyledStar = styled.span`
  color: ${(props) => props.theme.starColor};
`;
export const StyledMore = styled.div`
  display: ${(props) => (props.theme.show ? "block" : "none")};

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;
export const StyledName = styled.h1`
  font-size: large;
`;
export const StyledEmail = styled.span`
  font-size: small;
  word-break: break-all;
`;
export const StyledArrow = styled.span`
  font-size: small;
  cursor: pointer;
  margin-left: 5px;
`;
export const StyledMoreItem = styled.span`
  font-size: small;
  display: flex;
  padding: 11px;
`;
export const StyledMoreTitle = styled.span``;
export const StyledMoreValue = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;
