import React from 'react';

import Header from './components/Header';
import NewExpense from './components/NewExpense';

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <NewExpense />
    </div>
  );
}

export default App;
