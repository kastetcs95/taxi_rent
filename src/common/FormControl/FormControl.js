import React from 'react';
import styles from './FormControl.module.css';

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}
