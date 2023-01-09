import React from "react";

import FlatsList from '../containers/flat-list';
import Map from "../containers/map";
import flats from "../data/flats";

import '../assets/stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

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
