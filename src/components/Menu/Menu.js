import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={styles.menu__links}>
            <NavLink to="/" className={styles.menu__link} exact activeClassName={styles.active}>Home</NavLink>
            <NavLink to="/rents" className={styles.menu__link} activeClassName={styles.active}>Rent</NavLink>
        </div>
    )
}

export default Menu;