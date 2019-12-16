import React, { Component } from "react";
import { CompactPicker } from "react-color";

class ColorCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-4 bt-2">
        <CompactPicker />
      </div>
    );
  }
}

export default ColorCard;
