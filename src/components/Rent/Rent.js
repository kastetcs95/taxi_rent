import React from 'react';
import styles from './Rent.module.css';

const Rent = (props) => {

  const {rent, showChoosedRent, deleteRent} = props;
  const onShowChoosedRent = () => {
    showChoosedRent(rent.id);
  }

  const onDeleteRent = () => {
    deleteRent(rent.id);
  }

    return (
        <div className={styles.rent__item}>
          <div className={styles.rent__descr}>
            <div>
              {rent.brand} {rent.model}
            </div>
              
            <div>
              <span>Rent per day:</span> {rent.rentalPrice} BYN
            </div>
          </div>
              <div className={styles.rent__btn_block}>
                <button onClick={onShowChoosedRent} className={styles.rent__btn}>Show</button>
                </div>
              <span className={styles.close} onClick={onDeleteRent}></span>
        </div>
    )
}

export default Rent;