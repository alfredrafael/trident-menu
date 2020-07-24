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
          <Route path="/burgers" component={Burgers} />
          <Route path="/sandwiches" component={Sandwiches} />
          <Route path="/burgers" component={Soups} />
          <Route path="/egg-dishes" component={EggDishes} />
          <Route path="/from-the-griddle" component={FromTheGriddle} />


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
