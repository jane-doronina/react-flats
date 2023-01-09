import React from "react";

import FlatsList from '../containers/flat-list';
import Map from "../containers/map";

import '../assets/stylesheets/App.css';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <FlatsList />
        <Map />
      </div>
    );
  }
}

export default App;
