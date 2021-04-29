import React, { useState } from 'react';
import styles from './RentProfile.module.css';
import AddRent from '../AddRent/AddRent';


const RentProfile = (props) => {
    
    const {rents, rentId, hideChoosedRent, updateRent} = props;
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';

    const onHideChoosedRent = () => {
        document.body.style.height = '';
        document.body.style.overflowY = '';
        hideChoosedRent();
    }

    const onSubmit = (formData) => {
        updateRent(formData);
        setEditMode(false);
    }

    const [editMode, setEditMode] = useState(false);
  
    const onEditMode = () => {
        setEditMode(true);
    }

    return (
        <>
        <div className={styles.rent__item_popup} onClick={(e) => {
            document.body.style.height = '';
            document.body.style.overflowY = '';
            e.target.classList.toggle(styles.active);
            hideChoosedRent();
        }
        }>
        </div>
        <div className={styles.rent__item}>
           {
               editMode && 
               <AddRent onSubmit={onSubmit} initialValues={rents.filter((rent) => rent.id === rentId)[0]}  />
            }
            {
           
                !editMode &&
                rents.filter((rent) => rent.id === rentId)
                .map(rent => {
                    return (
                         
                        <div>
                            <div>
                                <span>Id:</span> {rent.id}
                            </div>
                            <div>
                            <span>Brand:</span> {rent.brand}
                            </div>
                            <div>
                            <span>Model:</span> {rent.model}
                            </div>
                            <div>
                            <span>Rent per day:</span> {rent.rentalPrice} BYN
                            </div>
                            <div>
                                <span>Phone:</span> {rent.phone}
                            </div>
                            <div>
                                <span>Name:</span> {rent.name}
                            </div>
                            <button onClick={onEditMode} className={styles.rent__btn}>Update</button> 
                            </div>
                        
                    )
                        
                })
            }
                
                <button onClick={onHideChoosedRent} className={styles.rent__btn}>Back</button>
                </div>
        </>
    )
}

export default RentProfile;