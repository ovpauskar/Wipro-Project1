import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';


export default class LoginPage extends Component {
  
  render() {

    return (
      <div className="ui grid container center aligned">
        <div className="row">
                <div className="header">OJT</div>
        </div>

        <div className="row">
        <div className="left aligned six wide computer eight wide tablet twelve wide mobile column">
          <div className="ui stackable segment">
            <div className="ui form">
						  <h2>Login</h2>
						<div className="field">
							<label>Username</label>
							<div className="ui left icon input">
								<input placeholder="Username" type="text" />
								<i className="user icon"></i>
							</div>
						</div>

						<div className="field">
							<label>Password</label>
							<div className="ui left icon input">
								<input type="password" />
								<i className="lock icon"></i>
							</div>
  					</div>
            <a href="#">Forgot Password</a>
						 <button className="ui blue submit button">Login</button> 

          <div className="ui horizontal divider">OR </div>
                  <h4>Login with </h4>

                        <button className='ui facebook button'>
                          <i className='facebook icon' />
                          Facebook
                        </button>
                        {/* <li>
                        <Button className='ui twitter button fluid'>
                          <i className='twitter icon' />
                          twitter
                        </Button>
                        </li>
                        <li>
                        <Button className='ui linkedin button fluid'>
                          <i className='linkedin icon' />
                          linkedin
                        </Button>
                        </li> */}
                       <Button className='ui google plus button'>
                          <i className='google plus icon' />
                          Google +
                        </Button>
                        </div>
            </div>
            </div>           
                
					</div>
          <Forgot_password />
          </div>
    );
  }
}
