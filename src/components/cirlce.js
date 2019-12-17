import React, {Component} from "react";


 class Circle extends Component {
     constructor(props){
         super(props);

     }


     render(){
         const {backgroundColor} = this.props ;
         return( <div className='container'>   
{backgroundColor.map(color => {
    return(
<div className='row'
      style={{
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: color,
        borderRadius: "50%",
        width: 70,
        height: 70
      }}
    ></div>)
})} 

         </div>
            
         )
     }
 }
export default Circle;
