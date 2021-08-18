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
            <Route exact path="/coindata" component={Home}/>
            <Route exact path="/coindata/about" component={About}/>
            <Route exact path="/coindata/alldata" component={AllData}/>
          </Switch>
        </Router>
      </Fragment>
  );
};

export default App;
