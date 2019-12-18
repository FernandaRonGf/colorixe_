import React, { Component } from "react";
import ColorThief from "colorthief"
import axios from "axios";
import Circle from './cirlce'
class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef()
    this.state = {
      img:'',
      paletteColors:null,
      favorite:[]
     
    }
  }

   rgbToHex = (rgb) => '#' + rgb.map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')


  onLoadImage= () => {
    const colorThief = new ColorThief();
    const img = this.imgRef.current;
    let result = colorThief.getPalette(img, 25)
    let hex = [];
for (let color in result) {
 
  hex.push(this.rgbToHex(result[color]));

}
    this.setState({
      paletteColors: hex
     
    })
  }

  addToFavorites = () => {
    let pallete = this.state.paletteColors
axios.post('https://colorixe.herokuapp.com/pallete', {
  colors:{color:pallete}
}).then(data => {
  const colors = JSON.parse(data.config.data)
  this.setState({
    favorite :  colors
  })
})
  }
  onImageSubmit = e => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
reader.onload =(e) => {
  this.setState({img: reader.result})
}

  };
  render() {
    return (
      <div class="container" style={{ marginTop: "50px", width: "30%" }}>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile02"  onChange={this.onImageSubmit}/>
          <label class="custom-file-label" for="inputGroupFile02">
            Choose file
          </label>
          <div class="text-center">
            {this.state.img != '' && (
              <img
  ref={this.imgRef}
   src={this.state.img} class="rounded" onLoad={this.onLoadImage}/>

            )}
</div>
{this.state.paletteColors != null && (
  <Circle 
backgroundColor={this.state.paletteColors} />
)}
<button 
type='button'
class="btn btn-primary btn-info"
onClick={this.addToFavorites}
> Favoritos</button>
        </div>
      </div>
    );
  }
}
export default ImageInput;
 