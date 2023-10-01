import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { propertyValue, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12; // 120 months = 10 years
  const interestPerMonth = interestRate / 100 / 12; // €100 @ 12% for 1 year
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ["Interest", "Principal"],
    datasets: [
      {
        label: "Ratio of Principal and Interest",
        data: [totalInterestGenerated, propertyValue],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(28, 135, 235, 0.3)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(28, 135, 2355, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: € {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
