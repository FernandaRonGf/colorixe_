import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
  
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
  }

  submit = () => {
    if ( this.state.password.length <= 4){ 
      alert('La contraseña debe ser de al menos 5 caracteres')
    } 
    else {
    axios.post('https://colorixe.herokuapp.com/new/user', {...this.state}).then((data =>{
      alert('Bienvenido a Colorixe ')
    } ))
    this.props.history.push("/colorixe")};
  };
  render() {
    return (
      <div class="container" style={{ marginTop: "50px" }}>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="card p-3">
              <h5 class="text-center">Colorixe_</h5>
              <form onChange={this.handleInput}>
                <div class="form-group">
                  <input type="text" class="form-control" name='username' placeholder="User" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name='firstName' placeholder="First Name" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name='lastName' placeholder="Last Name" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name='email' placeholder="@email" />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name='password'
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-outline-info btn-block"
                    type="button"
                    onClick={this.submit}
                  >
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default Login;
