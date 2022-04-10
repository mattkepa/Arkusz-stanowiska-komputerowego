import React, { useState, useRef } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.scss';

function NewExpense(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const formRef = useRef();

  const handleAddExpense = newExpense => {
    props.onAddExpense(newExpense);
  };

  const handleCollapse = () => {
    setIsCollapsed(prevState => {
      return !prevState;
    });
  };

  return (
    <section className="new-expense">
      <div className="new-expense__header">
        <h2>Dodaj nową pozycję</h2>
        {!isCollapsed && (
          <button
            className="btn btn--dark-blue new-expense__collapse-btn"
            onClick={handleCollapse}
          >
            <span className="icon-chevron-down icon-chevron-down--dark-blue"></span>
            <span className="button-text">Rozwiń</span>
          </button>
        )}
        {isCollapsed && (
          <button
            className="btn btn--dark-red new-expense__collapse-btn"
            onClick={handleCollapse}
          >
            <span className="icon-chevron-up icon-chevron-up--dark-red"></span>
            <span className="button-text">Zamknij</span>
          </button>
        )}
      </div>

      <div
        className="new-expense__form"
        ref={formRef}
        style={
          isCollapsed
            ? { height: formRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        <ExpenseForm
          onAddExpense={handleAddExpense}
          onCancel={handleCollapse}
        />
      </div>
    </section>
  );
}

export default NewExpense;
