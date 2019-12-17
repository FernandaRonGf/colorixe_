import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // this.setState(
    //     {
    //         [e.target.name]: e.target.value
    //     }
    // )
  }

  submit = () => {
    this.props.history.push("/colorixe");
  };
  render() {
    return (
      <div class="container" style={{ marginTop: "50px" }}>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="card p-3">
              <h5 class="text-center">Colorixe_</h5>
              <form action="#">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="User" />
                </div>
                <div class="form-group">
                  <input
                    type="password"
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
