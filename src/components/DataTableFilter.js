import React from 'react';

function DataTableFilter(props) {
  const handleChangeFilter = event => {
    props.onChangeFilter(event.target.value);
  };

  const handleChangeSort = event => {
    props.onChangeSort(event.target.value);
  };

  return (
    <div className="datatable-header__expenses-filters">
      <div className="expenses-filter__control">
        <label htmlFor="sort">Sortuj:</label>
        <select
          name="sort"
          id="sort"
          value={props.sortBy}
          onChange={handleChangeSort}
        >
          <option value="">Domyślnie</option>
          <option value="NAME-ASC">Nazwa - rosnąco</option>
          <option value="NAME-DESC">Nazwa - malejąco</option>
          <option value="PRICE-ASC">Cena - rosnąco</option>
          <option value="PRICE-DESC">Cena - malejąco</option>
        </select>
      </div>
      <div className="expenses-filter__control expenses-filter__control--large">
        <label htmlFor="filter">Filtruj:</label>
        <select
          name="filter"
          id="filter"
          value={props.filter}
          onChange={handleChangeFilter}
        >
          <option value="">wszystkie</option>
          <option value="podzespoły komputera">podzespoły komputera</option>
          <option value="oprogramowanie">oprogramowanie</option>
          <option value="urządzenia peryferyjne">urządzenia peryferyjne</option>
          <option value="inne">inne</option>
        </select>
      </div>
    </div>
  );
}

export default DataTableFilter;
