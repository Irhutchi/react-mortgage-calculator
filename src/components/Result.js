import { Stack, Typography } from "@mui/material";
import React from "react";

const Result = ({ data }) => {
  const { propertyValue, downPayment, loanAmount, loanTerm, interestRate } =
    data;

  const totalLoanMonths = loanTerm * 12; // 120 months = 10 years
  const interestPerMonth = interestRate / 100 / 12; // €100 @ 12% for 1 year

  const monthyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 * interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthyPayment * totalLoanMonths - loanAmount;

  return (
    <Stack>
      <Typography>Monthly Payment: € {monthyPayment.toFixed(2)}</Typography>
    </Stack>
  );
};

export default Result;
