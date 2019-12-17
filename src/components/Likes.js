import React, { Component } from 'react'
import  { TwitterPicker, CirclePicker} from 'react-color'

class Likes extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <CirclePicker 
                width={"14"}
                />
<TwitterPicker />
            </div>
        )
    }
}
export default Likes;