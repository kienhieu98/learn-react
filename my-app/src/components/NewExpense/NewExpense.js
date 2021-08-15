import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [enableExpenseForm, setEnableExpenseForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const handleAddNewButton = () => {
    setEnableExpenseForm(true);
  };

  const handleFormClose = () => {
    setEnableExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {enableExpenseForm ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={handleFormClose}/>
      ) : (
        <button type="button" onClick={handleAddNewButton}>Add Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
