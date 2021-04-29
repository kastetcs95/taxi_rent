import React from 'react';
import { withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControl/FormControl';
import {required, maxLengthCreator, isPhoneNumber, isPlusNumber} from '../../utils/validators/validators';
import style_btn from './../RentProfile/RentProfile.module.css';
import styles from './AddRent.module.css';

const maxLength15 = maxLengthCreator(15);
const maxLength3 = maxLengthCreator(3);

const AddRent = (props) => {

    const {history, handleSubmit, initialValues} = props;

    const onBack = (e) => {
        e.preventDefault();
        history.push("/rents");
    }

    return (
        <div>
            <form data-form="addForm" onSubmit={handleSubmit}>
                <Field placeholder="Brand" name="brand" component={Input} validate={[required, maxLength15]} type="text"/>
                <Field placeholder="Model" name="model" component={Input} validate={[required, maxLength15]} type="text"/>
                <Field placeholder="Rental price" name="rentalPrice" component={Input} validate={[required, maxLength3, isPlusNumber]} type="text"/>
                <Field placeholder="Phone" name="phone" component={Input} validate={[required, isPhoneNumber]} type="text"/>
                <Field placeholder="Name" name="name" component={Input} validate={[required, maxLength15]} type="text"/>

                {
                    !initialValues && <div>
                        <button className={styles.add__btn}>ADD</button>
                        <button className={styles.add__btn} onClick={onBack}>BACK</button>
                        </div>
                }
                {
                    initialValues && <button className={style_btn.rent__btn}>Update</button> 
                }
            </form>
        </div>
    )
}

export default withRouter(reduxForm({form: "addRent"})(AddRent));