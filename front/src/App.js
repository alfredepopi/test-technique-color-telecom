import React, {Component} from 'react';
import { BrowserRouter, Route, Router, Routes, Switch, Link } from 'react-router-dom';
import { Color } from './pages/Color';
import { Info } from './pages/Edit';
import { Creneaux } from './pages/Creneaux';
import { Navigation } from './pages/Navigation';

import './App.css';

class App extends Component {
  render() {
    return(
      <>
      <Color/>
      <Creneaux/>
      </>
    )
      
  }
}

export default App;
