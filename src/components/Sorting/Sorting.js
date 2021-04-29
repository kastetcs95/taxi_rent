import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Sorting.module.css';

const Sorting = (props) => {

  const {handleSubmit} = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.sorting__item}>
          <Field name="sort" component="select">
            <option value="none">None</option>
            <option value="brand">Brand</option>
            <option value="model">Model</option>
            <option value="rentalPrice">Rental Price</option>
          </Field>
        </div>
        <div>
          <div className={styles.sorting__item}>
            <label>Type of sorting:</label>
            <label>
              <Field
                name="typeSorting"
                component="input"
                type="radio"
                value="asc"
              />{' '}
                ASC
              </label>


            <label>
              <Field
                name="typeSorting"
                component="input"
                type="radio"
                value="desc"
              />{' '}
                DESC
              </label>
          </div>
        </div>
        <div className={styles.sorting__item}>
          <button className={styles.add__btn}>APPLY</button>
        </div>
      </form>

    </>
  )
}

export default reduxForm({ form: "sorting" })(Sorting);