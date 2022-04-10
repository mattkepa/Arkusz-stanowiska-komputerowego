import React from 'react';

import ExpensesDataTable from './ExpensesDataTable';

import './Expenses.scss';

function Expenses(props) {
  const expenses = props.items;

  const handleDeleteExpense = expenseID => {
    props.onDeleteExpense(expenseID);
  };

  return (
    <React.Fragment>
      <div className="section-separator"></div>
      <section className="expenses">
        {expenses.length === 0 && (
          <div className="expenses__default-note">
            Aktualnie nie masz dodanych żadnych pozycji.
          </div>
        )}
        {expenses.length > 0 && (
          <React.Fragment>
            <div className="expenses-datatable-header">
              <div className="datatable-header__heading">
                <h2>Zestawienie wydatków</h2>
                <h3>Stanowisko komputerowe</h3>
              </div>
            </div>
            <ExpensesDataTable
              items={expenses}
              onDeleteExpense={handleDeleteExpense}
            />
          </React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
}

export default Expenses;
