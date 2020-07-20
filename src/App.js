import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Page2 from './components/Page2/Page2';
import $ from 'jquery';


const App = () => {

  return (
    <React.Fragment>
    <Navbar />
      <Router>


        {/* //////////////////////////////////////////////////////////////////////// */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/page-2" component={Page2} />

          <Route render={() => <h2 style={{ paddingTop: '15%' }}>404 Page not found</h2>} />

        </Switch>
        {/* //////////////////////////////////////////////////////////////////////// */}


        <Footer />
      </Router>


    </React.Fragment>
  );
}

export default App;
