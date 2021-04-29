import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Rent from './Rent';
import styles from './Rent.module.css';
import {getRents, showChoosedRent, hideChoosedRent, deleteRent, updateRent, sortRent, filterRent, resetForm} from '../../redux/reducers/rent-reducer';
import RentProfile from '../RentProfile/RentProfile';
import Sidebar from '../Sidebar/Sidebar';

const RentContainer = (props) => {

    const {getRents, resetForm, filterRent, 
            sortRent,isShowChoosedRent,choosedId, 
            rents, hideChoosedRent, updateRent, 
            showChoosedRent, deleteRent} 
            = props;

    useEffect(() => {
        getRents();
    }, []);

    const onSubmit = (formData) => {
        if (formData.filter) {
            resetForm("sorting");
            filterRent(formData.filter);
        } else {
            resetForm("filter");
            sortRent(formData);
        }
    }

    return (
        <div className={styles.container}>
            <Sidebar onSubmit={onSubmit}  resetForm={resetForm}/>
            
            {
                isShowChoosedRent 
                && <RentProfile rentId={choosedId} rents={rents} hideChoosedRent={hideChoosedRent} updateRent={updateRent}/>
            }
            <div className={styles.rent}>
              {  rents.map( rent => {
                    return (
                        <div key={rent.id}>
                            <Rent rent={rent} showChoosedRent={showChoosedRent} deleteRent={deleteRent}/>
                        </div>
                    )
                    }
                )
            }
            </div>
            <div className={styles.btn}>
                <NavLink to={`/addRent`}>
                    <button>+</button>
                </NavLink>
            </div>
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
      rents: state.rentItems.rents,
      isShowChoosedRent: state.rentItems.isShowChoosedRent,
      choosedId: state.rentItems.choosedId
    }
  }

export default connect(mapStateToProps, {
    getRents, showChoosedRent, hideChoosedRent,
    deleteRent, updateRent, sortRent,
    filterRent, resetForm})(RentContainer);