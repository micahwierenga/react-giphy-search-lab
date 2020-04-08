import React, { Component } from 'react';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import './App.css';

class App extends Component {
  render() {
      return(
          <>
              <Search />
              <Results />
          </>
      )
  }
}

export default App;
