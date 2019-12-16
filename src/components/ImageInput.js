import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ImageInput extends Component {
    constructor(props){
        super(props)
    }

    onImageSubmit = (e) => {
      console.log(e.target.files)
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