import 'bootstrap/dist/css/bootstrap.min.css'
import './static/App.css';

import React from 'react';
import Sidebar from './sidebar/Sidebar'
import ApplicationPage from './application/ApplicationPage'
import SearchPage from './search/SearchPage'
import LoginPage from './login/LoginPage';


export default class App extends React.Component {
  constructor(props){
    super(props)
    let mapRouter = {
      'SearchPage': <SearchPage switchPage={this.switchPage.bind(this)}/>,
      'ApplicationPage' : <ApplicationPage switchPage={this.switchPage.bind(this)}/>,
      'LoginPage': <LoginPage switchPage={this.switchPage.bind(this)}/>
    }
    this.state ={
      currentPage: <LoginPage switchPage={this.switchPage.bind(this)}/>,
      mapRouter: mapRouter
    }
  };

  switchPage(pageName){
    this.setState({
      currentPage: this.state.mapRouter[pageName]
    })
  }

  render() {
    let app = (<div className="main-page">
      <Sidebar switchPage={this.switchPage.bind(this)}/>
      <div className="main">
        <div className="content">
          <div className="">
            {/* <span className="btn-icon ">
              <button className="btn btn-danger btn-icon"><i className="fas fa-plus"></i>&nbsp;New</button>
            </span> */}
          </div>
          {this.state.currentPage}
        </div>
      </div>
    </div>
    )
    return app;
  }
}
