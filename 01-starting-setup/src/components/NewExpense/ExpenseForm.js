import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /*const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  });
  function titleChangeHandler(event) {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // });
    setUserInput((prevState) => {
      return {...prevState, enteredTitle:event.target.value};
    })
  }
  function amountChangeHandler(event) {
    setUserInput({
      ...userInput,
      enteredAmount:event.target.value
    });
  }
  function dateChangeHandler(event) {
    setUserInput({
      ...userInput,
      enteredDate:event.target.value
    });
  }*/

  const [enteredTitle, setEnteredTitle] = useState("");
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  const [enteredAmount, setEnteredAmount] = useState("");
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  const [enteredDate, setEnteredDate] = useState("");
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;