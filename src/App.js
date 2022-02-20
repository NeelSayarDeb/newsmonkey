import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router> 
      <Navbar/>
        <Switch>
            <Route exact path="/basketball">
              <News key="basketball" query="Basketball"/>
            </Route>
            <Route exact path="/cricket">
              <News key="cricket" query="Cricket"/>
            </Route>
            <Route exact path="/football">
              <News key="football" query="Football"/>
            </Route>
            <Route exact path="/">
              <News key="sports" query=""/>
            </Route>
        </Switch>
    </Router>
  )
}

