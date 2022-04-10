import React from 'react';

import ExpenseItem from './ExpenseItem';

import './ExpensesDataTable.scss';

function ExpensesDataTable(props) {
  const expenses = props.items;

  const itemsQuantity = expenses.length;
  const totalPrice = expenses.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price,
    0
  );

  const handleDeleteExpense = expenseID => {
    props.onDeleteExpense(expenseID);
  };

  return (
    <div className="expenses__datatable">
      <table className="datatable">
        <thead>
          <tr className="datatable__row">
            <th scope="col" className="datatable__cell datatable__cell--num">
              L.p.
            </th>
            <th scope="col" className="datatable__cell datatable__cell--name">
              Nazwa
            </th>
            <th scope="col" className="datatable__cell datatable__cell--info">
              Opis
            </th>
            <th
              scope="col"
              className="datatable__cell datatable__cell--category"
            >
              Kategoria
            </th>
            <th scope="col" className="datatable__cell datatable__cell--price">
              Cena
            </th>
            <th
              scope="col"
              className="datatable__cell datatable__cell--actions"
            ></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <ExpenseItem
              key={expense.id}
              itemData={{ ...expense, index: index }}
              onDeleteItem={handleDeleteExpense}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="6">PODSUMOWANIE</th>
          </tr>
          <tr>
            <th colSpan="2" scope="row">
              ILOŚĆ POZYCJI:
            </th>
            <td colSpan="4">{itemsQuantity}</td>
          </tr>
          <tr>
            <th colSpan="2" scope="row">
              RAZEM:
            </th>
            <td colSpan="4">
              {totalPrice.toLocaleString('pl-PL', {
                minimumFractionDigits: '2',
                maxFractionDigits: '2',
              })}{' '}
              zł
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpensesDataTable;
