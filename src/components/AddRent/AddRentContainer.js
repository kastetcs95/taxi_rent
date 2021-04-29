import React from 'react';
import AddRent from './AddRent';
import {postRent} from '../../redux/reducers/rent-reducer';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import styles from './AddRent.module.css';

const AddRentContainer = (props) => {

    const {postRent, history} = props;
    const onSubmit = (formData) => {
        postRent(formData);
        history.push("/rents");
    }

    return (
        <div className={styles.container}>
            <AddRent onSubmit={onSubmit} />
        </div>
    )
}

export default withRouter(connect(null, {postRent})(AddRentContainer));