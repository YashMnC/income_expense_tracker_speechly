import { useContext } from "react";
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "./contants/categories";
import { ExpenseTrackerContext } from "./context/context";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const selectedTransactions = transactions.filter((t) => t.type === title);
  const total = selectedTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  selectedTransactions.forEach((t) => {
    categories.forEach((c) => {
      if (c.type === t.category) c.amount += t.amount;
    });
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],

    labels: filteredCategories.map((c) => c.type),
  };

  return { total, chartData };
};

export default useTransactions;
