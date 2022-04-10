import React, { useState } from 'react';

import Header from './components/Header';
import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';

import './App.scss';

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expense) {
    setExpenses(prevState => [...prevState, expense]);
  }

  function deleteExpense(expenseID) {
    setExpenses(prevState => {
      const index = prevState.findIndex(expense => expense.id === expenseID);
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  }

  return (
    <div className="app-container">
      <Header />
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
