import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (yearChange) => {
    setSelectedYear(yearChange);
  };

  const filteredExpense = props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===selectedYear;
  })

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectedYear={selectedYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpenseList items={filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
