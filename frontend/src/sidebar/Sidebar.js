import React, { Component } from 'react';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../static/Sidebar.css'
export default class Sidebar extends Component {

    logout() {
        let token = localStorage.getItem('auth-token')
        if(!token){
            this.props.switchPage('LoginPage')
        }
        else{
            $.ajax({
                url: 'http://flask-group19-se.eastus.cloudapp.azure.com/:5000/logout',
                method: 'POST',
                contentType: 'application/json',
                headers:{
                    'x-access-token': token
                },
                success: (data) => {
                    localStorage.removeItem('auth-token')
                    console.log('Logout successful');
                    this.props.switchPage('LoginPage');
                },
                error: (err) => {
                    console.log(JSON.stringify(err));
                }
            })
        }
    }

    render() {
        return (
            <div className="left-nav">
                <div className="left-nav-item">
                    <div className="left-nav-text-wrapper">
                        <div onClick={() => this.props.switchPage('ApplicationPage')}>
                            <i className="fas fa-columns left-nav-icon" ></i>
                        </div>
                        Apps
                    </div>
                    <div className="left-nav-text-wrapper">
                        <div onClick={() => this.props.switchPage('SearchPage')}>
                            <i className="fas fa-search left-nav-icon"></i>
                        </div>
                        Search
                    </div>
                    <div className="left-nav-text-wrapper">
                        <div onClick={() => this.props.switchPage('LoginPage')}>
                            <i className="fas fa-sign-in-alt left-nav-icon"/>
                        </div>
                        Log In
                    </div>
                    <div className="left-nav-text-wrapper">
                        <div onClick={this.logout.bind(this)}>
                            <i className="fas fa-sign-out-alt left-nav-icon"/>
                        </div>
                        Log Out
                    </div>
                </div>
            </div>
        );
    }
}
