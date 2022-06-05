import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";
import useTransactions from "../../useTransactions";
import Chart from "chart.js/auto";
import income from "../../assets/income.png";
import expense from "../../assets/expense.png";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader
        avatar={<img src={title === "Income" ? income : expense} />}
      />
      <CardHeader title={`${title} : $${total}`} align="center" />
      <CardContent>
        {/* <Typography variant="h5">${total}</Typography> */}
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
