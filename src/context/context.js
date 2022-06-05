import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 30,
    type: "Expense",
    category: "Bills",
    date: "2022-05-31",
    id: "b6a147ca-a308-418c-b639-38fcd17ffadb",
  },
  {
    amount: 50,
    type: "Income",
    category: "Business",
    date: "2022-05-26",
    id: "a2976304-54ee-4ea8-8fa4-c3e3bbf21e51",
  },
  {
    amount: 10,
    type: "Expense",
    category: "House",
    date: "2022-05-29",
    id: "597057a5-c222-45c4-bd47-98b34b4469bb",
  },
  {
    amount: 10,
    type: "Expense",
    category: "Pets",
    date: "2022-05-31",
    id: "a72c6490-53f0-4bc1-80d7-69b8bfb23e10",
  },
  {
    amount: 100,
    type: "Income",
    category: "Salary",
    date: "2022-05-30",
    id: "a6926095-fc2f-4e9b-8e52-c0a3238f3934",
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Income"
      ? acc + currVal.amount
      : acc - currVal.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
