import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import axios from "axios";
class ImageInput extends Component {
  constructor(props) {
    super(props);
  }

  onImageSubmit = e => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("name", "some value user types");
    data.append("description", "some value user types");
    // '/files' is your node.js route that triggers our middleware
    axios.post("/colorixe", data).then(response => {
      console.log(response); // do something with the response
    });
  };
  render() {
    return (
      <div class="container" style={{ marginTop: "50px", width: "30%" }}>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile02" />
          <label class="custom-file-label" for="inputGroupFile02">
            Choose file
          </label>
        </div>
      </div>
    );
  }
}
export default ImageInput;
