import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AllData from './components/pages/AllData';
import './App.css';

const App = () => {
  return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/Coindata" component={Home}/>
            <Route exact path="/Coindata/about" component={About}/>
            <Route exact path="/Coindata/alldata" component={AllData}/>
          </Switch>
        </Router>
      </Fragment>
  );
};

export default App;
