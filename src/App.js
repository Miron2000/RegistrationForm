import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import RegistrationForm from "./containers/RegistrationForm";
import BookingForm from "./containers/BookingForm";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <>
      <Nav>
        <Link to='/'>Registration</Link>
        <Link to='/booking'>Booking Form</Link>
      </Nav>
      <Switch>
      {/* exact для пустой тобто path='/' ТИПУ ГОЛОВНА СТОРІНКА*/}
      <Route path="/" exact component={RegistrationForm} />
      <Route path='/booking' component={BookingForm} />
      {/* <Route path='/booking/:id' /> */}
      </Switch>
    </>
  );
}

export default App;
