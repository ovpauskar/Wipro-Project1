import React, { Component } from 'react';
import "./logins.css";

class Logins extends Component {
    render() {
        return (
            <div className="ui grid center aligned container">
                <div className="row">
                    <h2 className="ui teal header">
                        <div className="content">
                        Log-in
                        </div>   
                    </h2>
                    
           <div className="ui stacked segment">   
              <form className="ui form">
                  <div className="field">
                    <div className="ui fluid left icon input">
                      <i className="user icon"></i>
                      <input type="text" name="email" placeholder="Your Email address"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui fluid left icon input">
                      <i className="lock icon"></i>
                      <input type="password" name="password" placeholder="Enter Password"/>
                    </div>
                  </div>
                  <div className="mini-mobile massive-computer ui primary button">Login</div>
                
                <div className="ui horizontal divider">Or</div>
                <div className="login-third-party-login">
                  <p className="login-button-info-text login-info-text">Easily Using</p>
                <div className="login-button-container">
                <button className="ui facebook button" role="button">
                    <i aria-hidden="true" class="facebook icon"></i> Facebook</button>
                      <button className="ui google plus button" role="button">
                    <i aria-hidden="true" class="google plus icon"></i> Google Plus</button>
                </div>
              </div>
              </form>
             </div>  
            </div>
            </div>
          
        );
    }
}

export default Logins;