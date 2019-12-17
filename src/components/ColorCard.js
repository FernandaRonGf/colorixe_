import React, { Component } from "react";
import { CompactPicker } from "react-color";

class ColorCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="align-middle">
        <CompactPicker />
      </div>
    );
  }
}

export default ColorCard;
