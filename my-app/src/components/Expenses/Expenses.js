import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const handleFilterChange = (year) => {
    setFilterYear(year);
  };

  const filteredExpesnses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={handleFilterChange}
        />
        <ExpenseList items={filteredExpesnses} />
      </Card>
    </li>
  );
};

export default Expenses;
