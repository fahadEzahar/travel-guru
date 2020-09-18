import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TouristPlaceDetails from './components/TouristPlaceDetails/TouristPlaceDetails';
import Login from './components/Login/Login';
import SingleHotelInfo from './components/SingleHotelInfo/SingleHotelInfo';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const userContext = createContext();

function App() {
  const [place, setPlace] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <userContext.Provider value={{ place: [place, setPlace], loggedInUser: [loggedInUser, setLoggedInUser] }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home />
          </Route>
          <Route path="/home">
            <Header/>
            <Home/> 
          </Route>
          <Route path="/touristPlace/:id">
            <Header/>
            <TouristPlaceDetails/>
          </Route>
          <Route path="/login">
            <Header/>
            <Login/>
          </Route>
          <PrivateRoute path="/hotelInfo">
            <Header/>
            <SingleHotelInfo/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
