import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            authenticated :false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // this.setState(
        //     {
        //         [e.target.name]: e.target.value
        //     }
        // )
    }

    submit = () => {
        this.props.history.push('/colorixe')
    }
    render() {
        return (
            <div className="row">
                <div className="mt-2">
                    <h1>Login</h1>
                    <form onSubmit={this.submit}>
                        <input
                            className="form-item"
                            placeholder="Username goes here..."
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="First Name..."
                            name="firstname"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

   
}

export default Login;