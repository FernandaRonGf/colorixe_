import React, { Component } from 'react'
import  { TwitterPicker, CirclePicker} from 'react-color'

class Likes extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="d-flex flex-column">
                <div className='align-center'
><TwitterPicker />
    </div>                <CirclePicker 
                width={"14"}
                />
            </div>
        )
    }
}
export default Likes;