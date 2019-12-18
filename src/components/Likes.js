import React, { Component } from "react";
import { TwitterPicker, CirclePicker } from "react-color";
import axios from "axios";
class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: null
    };
  }

  componentDidMount() {
    axios.get("https://colorixe.herokuapp.com/pallete-list").then(pallete => {
      pallete.data.colors.map(colors => {
        this.setState({ colors: colors.colors.color });
      });
    });
  }

  render() {
    return (
      <div className="aling-center">
        <div className="align-center">
          <TwitterPicker colors={this.state.colors} />
        </div>
      </div>
    );
  }
}
export default Likes;
