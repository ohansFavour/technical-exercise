import React from "react";

// styled components
import {
  StyledItemValue,
  StyledItemTitle,
  StyledSummaryItem,
} from "./StyledSummaryItem";

const SummaryItem = ({ item }) => {
  return (
    <StyledSummaryItem>
      <StyledItemTitle>{item.title}:</StyledItemTitle>
      <StyledItemValue>{item.value}</StyledItemValue>
    </StyledSummaryItem>
  );
};

export default SummaryItem;
