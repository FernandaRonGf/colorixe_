import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class  Navigator extends Component {
    constructor(props){
        super(props)
    }

    render ( ) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Colorixe_</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/colorixe">Home </Link>
      <Link className="nav-item nav-link" to="/colorixe/favorites">Favorites</Link>
    </div>
  </div>
</nav>

        )
    }
   
  
  }
  
  export default Navigator;