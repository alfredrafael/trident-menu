import React, { useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Container} from 'reactstrap';
import Navbar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Drinks from './components/Drinks/Drinks';
import Burgers from './components/Burgers';
import Sandwiches from './components/Sandwiches';
import Soups from './components/Soups';
import EggDishes from './components/EggDishes';
import FromTheGriddle from './components/FromTheGriddle';
import Eggwagons from './components/Eggwagons';
import TridentBowls from './components/TridentBowls';
import BreakfastBowls from './components/BreakfastBowls';

import $ from 'jquery';


const App = () => {

  return (
    <React.Fragment>
    <Navbar />
    
      <Router>
      <Container>

     

        {/* //////////////////////////////////////////////////////////////////////// */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/drinks" component={Drinks} />
          <Route path="/egg-dishes" component={EggDishes} />
          <Route path="/eggwagons" component={Eggwagons} />
          <Route path="/from-the-griddle" component={FromTheGriddle} />TridentBowls
          <Route path="/trident-bowls" component={TridentBowls} />
          <Route path="/soups" component={Soups} />
          <Route path="/burgers" component={Burgers} />
          <Route path="/sandwiches" component={Sandwiches} />
          <Route path="/breakfast-bowls" component={BreakfastBowls} />
          {/* Alcohol/Cold/Hot/Frappes drinks: create components and add here*/}


          <Route render={() => <h2 style={{ paddingTop: '15%' }}>404 Page not found</h2>} />

        </Switch>
        {/* //////////////////////////////////////////////////////////////////////// */}
        </Container>

        <Footer />
      </Router>


    </React.Fragment>
  );
}

export default App;
