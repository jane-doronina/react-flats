import React from "react";
import Flat from "../flat/flat";
import './flat-list.styles.css';

const FlatsList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flats-list">
      {renderList()}
    </div>
  );
}

export default FlatsList;
