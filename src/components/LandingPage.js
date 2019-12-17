import React, {Component} from 'react';
import { Button } from 'reactstrap';

class LandingPage extends Component {
    constructor(props){
        super(props)
    }
changeURL = () => {
    this.props.history.push('/login')
}

    render(){
        return(
            <div>
            <Button outline color="black"
            onClick={this.changeURL}
            >Login</Button>{' '}
            </div>
        )
    }
}
export default LandingPage;