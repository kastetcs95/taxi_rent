import React from 'react';
import { Route } from 'react-router';
import styles from './App.module.css'
import Header from './components/Header/Header';
import RentContainer from './components/Rent/RentContainer';
import AddRentContainer from './components/AddRent/AddRentContainer';
import Home from './components/Home/Home';

const App = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div >
        <Route exact path="/" render={ () => <Home/> }/>
        <Route path="/rents" render={ () => <RentContainer/> }/>
        <Route path="/addRent" render={ () => <AddRentContainer/> }/>      
      </div>
    </div>
  )
}


export default App;
