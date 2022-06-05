import React, { useContext, useState } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";
import CustomizedSnackbar from "../../Snackbar/Snackbar";

const List = () => {
  const classes = useStyles();

  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  const [open, setOpen] = useState(false);

  const handleDeleteTransaction = (id) => {
    deleteTransaction(id);
    setOpen(true);
  };

  return (
    <>
      <MUIList dense={false} className={classes.list}>
        <CustomizedSnackbar
          open={open}
          setOpen={setOpen}
          severity="error"
          snackbarText="Transaction is deleted successfully."
        />
        {transactions.map((transaction) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    transaction.type === "Income"
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`$${transaction.amount} - ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTransaction(transaction.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </>
  );
};

export default List;
