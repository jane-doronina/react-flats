import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectFlat } from "../actions";

import '../assets/stylesheets/flat.css';

class Flat extends React.Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    return (
      <div className={`card${this.props.flat === this.props.selectedFlat ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }} onClick={this.handleClick} >
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

const mapStateToProps = (state) => {
  return {
    selectedFlat: state.selectedFlat
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
