import React, { useState } from 'react';

import ExpensesDataTable from './ExpensesDataTable';
import DataTableFilter from './DataTableFilter';

import './Expenses.scss';

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const expenses = props.items;

  const handleDeleteExpense = expenseID => {
    props.onDeleteExpense(expenseID);
  };

  const handleChangeFilter = category => {
    setSelectedFilter(category);
  };

  const handleChangeSort = method => {
    setSelectedSort(method);
  };

  function sort(arr, method) {
    if (method === 'NAME-ASC') {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (method === 'NAME-DESC') {
      return arr.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    } else if (method === 'PRICE-ASC') {
      return arr.sort((a, b) => a.price - b.price);
    } else if (method === 'PRICE-DESC') {
      return arr.sort((a, b) => a.price - b.price).reverse();
    } else {
      return arr;
    }
  }

  const filteredExpenses =
    selectedFilter === ''
      ? expenses
      : expenses.filter(expense => expense.category === selectedFilter);

  const sortedAndFilteredExpenses =
    selectedSort === ''
      ? filteredExpenses
      : sort(filteredExpenses, selectedSort);

  return (
    <React.Fragment>
      <div className="section-separator"></div>
      <section className="expenses">
        {expenses.length === 0 && (
          <div className="expenses__default-note">
            Aktualnie nie masz dodanych żadnych pozycji.
          </div>
        )}
        {expenses.length > 0 && sortedAndFilteredExpenses.length > 0 && (
          <React.Fragment>
            <div className="expenses-datatable-header">
              <div className="datatable-header__heading">
                <h2>Zestawienie wydatków</h2>
                <h3>Stanowisko komputerowe</h3>
              </div>
              <DataTableFilter
                filter={selectedFilter}
                sortBy={selectedSort}
                onChangeFilter={handleChangeFilter}
                onChangeSort={handleChangeSort}
              />
            </div>
            <ExpensesDataTable
              items={sortedAndFilteredExpenses}
              onDeleteExpense={handleDeleteExpense}
              selectedCategory={selectedFilter}
            />
          </React.Fragment>
        )}
        {expenses.length > 0 && sortedAndFilteredExpenses.length === 0 && (
          <React.Fragment>
            <div className="expenses-datatable-header">
              <div className="datatable-header__heading">
                <h2>Zestawienie wydatków</h2>
                <h3>Stanowisko komputerowe</h3>
              </div>
              <DataTableFilter
                filter={selectedFilter}
                sortBy={selectedSort}
                onChangeFilter={handleChangeFilter}
                onChangeSort={handleChangeSort}
              />
            </div>
            <div className="expenses__default-note">
              Brak wyników dla wybranej kategorii.
            </div>
          </React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
}

export default Expenses;
