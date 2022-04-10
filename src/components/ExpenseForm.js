import React, { useReducer, useEffect } from 'react';

import './ExpenseForm.scss';

function validateField(fieldType, value) {
  if (fieldType === 'TEXT_INPUT') {
    return value.trim().length > 0;
  }
  if (fieldType === 'NUMBER_INPUT') {
    return !isNaN(parseFloat(value)) && parseFloat(value) > 0;
  }
}

const initialFormState = {
  isValid: false,
  name: {
    value: '',
    isValid: false,
    hasText: false,
    touched: false,
  },
  details: {
    value: '',
    isValid: false,
    hasText: false,
    touched: false,
  },
  category: {
    value: '',
    isValid: false,
    hasText: false,
    touched: false,
  },
  price: {
    value: '',
    isValid: false,
    hasText: false,
    touched: false,
  },
};

const formReducer = (state, action) => {
  if (action.type === 'INPUT') {
    const inputType = action.field === 'price' ? 'NUMBER_INPUT' : 'TEXT_INPUT';

    return {
      ...state,
      [action.field]: {
        ...state[action.field],
        value: action.payload,
        isValid: validateField(inputType, action.payload),
      },
    };
  }

  if (action.type === 'BLUR') {
    const inputType = action.field === 'price' ? 'NUMBER_INPUT' : 'TEXT_INPUT';

    return {
      ...state,
      [action.field]: {
        ...state[action.field],
        isValid: validateField(inputType, state[action.field].value),
        hasText: state[action.field].value.length > 0,
        touched: true,
      },
    };
  }

  if (action.type === 'VALIDATION') {
    return {
      ...state,
      isValid: action.payload,
    };
  }

  if (action.type === 'RESET_FORM') {
    return initialFormState;
  }

  return state;
};

function ExpenseForm(props) {
  const [form, dispatch] = useReducer(formReducer, initialFormState);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const formIsValid =
        (form.name.isValid &&
          form.details.isValid &&
          form.category.isValid &&
          form.price.isValid) ||
        false;

      dispatch({ type: 'VALIDATION', payload: formIsValid });
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [
    form.name.isValid,
    form.details.isValid,
    form.category.isValid,
    form.price.isValid,
  ]);

  const handleInputChange = event => {
    dispatch({
      type: 'INPUT',
      field: event.target.name,
      payload: event.target.value,
    });
  };

  const handleInputBur = event => {
    dispatch({
      type: 'BLUR',
      field: event.target.name,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newExpense = {
      id: `id${Date.now()}-e`,
      name: form.name.value,
      details: form.details.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
    };

    props.onAddExpense(newExpense);
    dispatch({ type: 'RESET_FORM' });
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <div
          className={`form__field ${
            form.name.touched && !form.name.isValid
              ? 'form__field--invalid'
              : ''
          } ${form.name.hasText ? 'hasText' : ''}`}
        >
          <input
            type="text"
            name="name"
            id="name"
            value={form.name.value}
            onChange={handleInputChange}
            onBlur={handleInputBur}
          />
          <label htmlFor="name" className="field__label">
            Nazwa
          </label>
        </div>
        {!form.name.isValid && form.name.touched && (
          <div className="field__error-msg">Pole jest wymagane.</div>
        )}
      </div>

      <div className="form__group">
        <div
          className={`form__field ${
            form.details.touched && !form.details.isValid
              ? 'form__field--invalid'
              : ''
          } ${form.details.hasText ? 'hasText' : ''}`}
        >
          <input
            type="text"
            name="details"
            id="details"
            value={form.details.value}
            onChange={handleInputChange}
            onBlur={handleInputBur}
          />
          <label htmlFor="details" className="field__label">
            Dane szczegółowe
          </label>
        </div>
        {!form.details.isValid && form.details.touched && (
          <div className="field__error-msg">Pole jest wymagane.</div>
        )}
      </div>

      <div className="form__group">
        <div className="form__field form__field--select">
          <select
            name="category"
            id="category"
            value={form.category.value}
            onChange={handleInputChange}
            onBlur={handleInputBur}
          >
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
        {!form.category.isValid && form.category.touched && (
          <div className="field__error-msg">Pole jest wymagane.</div>
        )}
      </div>

      <div className="form__group">
        <div
          className={`form__field ${
            form.price.touched && !form.price.isValid
              ? 'form__field--invalid'
              : ''
          } ${form.price.hasText ? 'hasText' : ''}`}
        >
          <input
            type="number"
            name="price"
            id="price"
            step="0.01"
            min="0"
            value={form.price.value}
            onChange={handleInputChange}
            onBlur={handleInputBur}
          />
          <label htmlFor="price" className="field__label">
            Cena
          </label>
        </div>
        {!form.price.isValid && form.price.touched && (
          <div className="field__error-msg">
            Proszę podać prawidłową liczbę.
          </div>
        )}
      </div>

      <div className="form__actions">
        <button
          type="button"
          className="form__cancel-button btn btn--dark"
          onClick={handleCancel}
        >
          <span className="button-text">Anuluj</span>
        </button>
        <button
          type="submit"
          className="btn btn--blue form__submit-button"
          disabled={!form.isValid}
        >
          <span className="icon-add"></span>
          <span className="button-text">Dodaj</span>
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
