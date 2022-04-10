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

  return (
    <div className="app-container">
      <Header />
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
