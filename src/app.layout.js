import React, {Component} from "react";
import ColorCard from "./components/ColorCard";
import Header from "./components/Header";
import ImageInput from "./components/ImageInput";
import  Likes  from './components/Likes'
import Navigator from './components/Navigator'

class AppLayout extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
      <div>
          <Navigator />
      </div>
      <div>
          <ImageInput/>
      </div>
      <div>
          <ColorCard/>
      </div>
  </div>
        )
    }
}

export default AppLayout;
