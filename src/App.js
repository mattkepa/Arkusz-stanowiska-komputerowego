import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';

import './App.scss';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('expenses-db');
    if (storedData) {
      setExpenses(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses-db', JSON.stringify(expenses));
  }, [expenses]);

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
