import React from 'react';
import Menu from '../Menu/Menu';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <NavLink to="/">
                <div className={styles.header__logo}>TAXI RENT</div>
            </NavLink>
            <Menu/>
        </div>
    )
}

export default Header;