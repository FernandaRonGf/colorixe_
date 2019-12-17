import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
  } from 'reactstrap';
  import {Link} from 'react-router-dom'
  
class  Navigator extends Component {
    constructor(props){
        super(props)
    }

    render ( ) {
        return (
              <div>
        <Navbar color="dark" light expand="md">
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/colorixe/likes">Favorites</Link>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>

        )
    }
   
  
  }
  
  export default Navigator;