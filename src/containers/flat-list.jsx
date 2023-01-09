import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFlats } from "../actions";

import Flat from "./flat";
import "../assets/stylesheets/flats-list.css";



class FlatsList extends React.Component {

  componentDidMount() {
    // dispatch an action
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flats-list">
        {this.props.flats.map((flat, index) => {
          return (
            <Flat
              flat={flat}
              key={index}
              index={index}
            />);
          }
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

const mapStateToProps = (state) => {
  return {
    flats: state.flats
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatsList);
