import React, {Component} from 'react';
import { Color } from './pages/Color';
import { Creneaux } from './pages/Creneaux';


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
