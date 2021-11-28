import React, { Component } from 'react';
import $ from 'jquery'

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login() {
        if (!this.state.username || !this.state.password) {
            alert("Please enter a username and password.")
            return
        }
        $.ajax({
            url: 'http://localhost:5000/login',
            method: 'POST',
            data: JSON.stringify({
                email: this.state.username,
                passwd: this.state.password
            }),
            contentType: 'application/json',
            success: (data) => {
                localStorage.setItem('auth-token', data["auth-token"]);
                this.props.switchPage('ApplicationPage');
            },
            error: (err) => {
                console.log(JSON.stringify(err));
                alert("Invalid username or password.")
            }
        })
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Login</h1>
                <div className="container">
                    <input
                        type="text"
                        id="username"
                        className="form-control m-1"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={this.state.username}
                        onChange={this.handleChange.bind(this)}
                    />
                    <input
                        type="password"
                        id="password"
                        className="form-control m-1"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button
                        type="button"
                        className="btn btn-secondary w-100 m-1"
                        onClick={this.login.bind(this)}
                    >
                        Login
                    </button>
                </div>
            </div>
        )
    }
}
