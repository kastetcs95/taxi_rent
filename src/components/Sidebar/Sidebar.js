import React, { useState } from 'react';
import styles from './Sidebar.module.css';

import Sorting from '../Sorting/Sorting';
import Filter from '../Filter/Filter';

const Sidebar = (props) => {

    const {resetForm, onSubmit} = props;

    const [filterMode, setFilterMode] = useState(false);

    const sortRef = React.createRef();
    const filtrRef = React.createRef();

    const onSetFilterMode = () => {
        if (filterMode) {
            resetForm("filter");
            setFilterMode(false);
            
        } else {
            resetForm("sorting");
            setFilterMode(true)
            setSortMode(false)
            sortRef.current.classList.remove(styles.sidebar__sort);
        }
        filtrRef.current.classList.toggle(styles.sidebar__filtr);
    }

    const [sortMode, setSortMode] = useState(false);


    const onSetSortMode = () => {
        if (sortMode) {
            resetForm("sorting");
            setSortMode(false);
            
        } else {
            resetForm("filter");
            setSortMode(true)
            setFilterMode(false)
            console.log(styles);
            filtrRef.current.classList.remove(styles.sidebar__filtr);
        }
        sortRef.current.classList.toggle(styles.sidebar__sort);
    }

    const onReset = () => {
        resetForm("sorting");
        resetForm("filter");
    }

    const getInitialValue = () => ({typeSorting: "asc"})
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__items}>
                <div>
                    <div className={styles.sidebar__item}>
                        <div onClick={onSetSortMode}><span ref={sortRef}>SORTING </span></div>
                        { sortMode && 
                          <Sorting onSubmit={onSubmit} initialValues={getInitialValue()} resetForm={resetForm}/>
                        }
                    </div>
                    <div className={styles.sidebar__item}>
                        <div onClick={onSetFilterMode}><span ref={filtrRef}>FILTER </span></div>
                        { filterMode && 
                          <Filter onSubmit={onSubmit}/>
                        }
                    </div>
                    <div className={styles.sidebar__item}>
                        <button onClick={onReset} className={styles.sidebar__reset}>RESET</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;