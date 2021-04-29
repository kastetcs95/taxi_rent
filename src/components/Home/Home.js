import React from 'react';
import styles from './Home.module.css';

const Home = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.home__title}>TAXI RENT</div>
            <div className={styles.home__subtitle}>Taxi is a type of transport that provides individual transportation of passengers or cargo from the point of departure to the point of destination. Most often, sedans or minivans are used as taxi cars, and there are also limousines.</div>
        </div>
    )
}

export default Home;