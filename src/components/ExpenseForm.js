import React from 'react';

import './ExpenseForm.scss';

function ExpenseForm() {
  return (
    <form className="form">
      <div className="form__group">
        <div className="form__field">
          <input type="text" name="name" id="name" />
          <label htmlFor="name" className="field__label">
            Nazwa
          </label>
        </div>
        <div className="field__error-msg">Pole jest wymagane.</div>
      </div>

      <div className="form__group">
        <div className="form__field">
          <input type="text" name="details" id="details" />
          <label htmlFor="details" className="field__label">
            Dane szczegółowe
          </label>
        </div>
        <div className="field__error-msg">Pole jest wymagane.</div>
      </div>

      <div className="form__group">
        <div className="form__field form__field--select">
          <select name="category" id="category">
            <option value="">--- Wybierz kategorię ---</option>
            <option value="podzespoły komputera">podzespoły komputera</option>
            <option value="urządzenia peryferyjne">
              urządzenia peryferyjne
            </option>
            <option value="oprogramowanie">oprogramowanie</option>
            <option value="inne">inne</option>
          </select>
          <label htmlFor="category" className="field__label">
            Kategoria
          </label>
        </div>
        <div className="field__error-msg">Pole jest wymagane.</div>
      </div>

      <div className="form__group">
        <div className="form__field">
          <input type="number" name="price" id="price" step="0.01" min="0" />
          <label htmlFor="price" className="field__label">
            Cena
          </label>
        </div>
        <div className="field__error-msg">Proszę podać prawidłową liczbę.</div>
      </div>

      <div className="form__actions">
        <button type="button" className="btn btn--dark form__cancel-button">
          <span className="button-text">Anuluj</span>
        </button>
        <button type="submit" className="btn btn--blue form__submit-button">
          <span className="icon-add"></span>
          <span className="button-text">Dodaj</span>
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
