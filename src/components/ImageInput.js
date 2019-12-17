import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
class ImageInput extends Component {
    constructor(props){
        super(props)
    }

    onImageSubmit = (e) => {
      const data = new FormData();
      data.append('file', e.target.files[0]);
      data.append('name', 'some value user types');
      data.append('description', 'some value user types');
      // '/files' is your node.js route that triggers our middleware
      axios.post('/colorixe', data).then((response) => {
        console.log(response); // do something with the response
      });
  }
    render (){
        return(
            <div>
            <FormGroup row>
        <Label for="exampleFile" sm={2}>Agrega tu imagen</Label>
        <Col sm={8}>
          <Input type="file" name="file" id="exampleFile" onChange={this.onImageSubmit} />
        </Col>
      </FormGroup>
            </div>
        )
    }
}
export default ImageInput;