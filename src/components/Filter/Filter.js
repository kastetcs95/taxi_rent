import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Filter.module.css';

const Filter = (props) => {

    const {handleSubmit} = props;
    return (
        <>
     
            <form onSubmit={handleSubmit}>
            <div className={styles.filter__item}>
                <Field data-input="filterInput" name="filter" component="input"/>
                </div>
                <div className={styles.filter__item}>
                <button className={styles.add__btn}>APPLY</button>
                </div>
            </form>
            
            </>
    )
}

export default reduxForm({form: "filter"})(Filter);