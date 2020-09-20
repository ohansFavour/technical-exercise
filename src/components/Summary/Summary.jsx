import React, { useContext, useEffect, useState } from "react";

// context
import { UsersContext } from "../../context/store";

// helpers
import summaryStat from "../../utils/summaryStat";

// styled components
import { StyledSummary, StyledTitle, StyledList } from "./StyledSummary";

// components
import SummaryItem from "../SummaryItem/SummaryItem";

const Summary = () => {
  const [summaryData, setSummaryData] = useState({});
  const {
    state: { users },
  } = useContext(UsersContext);

  useEffect(() => {
    if (users) {
      const summaryObj = summaryStat(users);
      setSummaryData({ ...summaryData, ...summaryObj });
    }
  }, [users]);

  return (
    <StyledSummary>
      <StyledTitle>Summary</StyledTitle>
      <StyledList>
        {Object.values(summaryData).map((el, index) => (
          <SummaryItem key={index} item={el} />
        ))}
      </StyledList>
    </StyledSummary>
  );
};

export default Summary;
