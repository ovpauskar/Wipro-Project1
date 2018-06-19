import React, { Component } from 'react';

//Components
import FacebookLogin from './FacebookLogin/'
import GoogleLogin from './GoogleLogin/'
// import LinkedinLogin from './LinkedinLogin/'

//import config from '../../../config';

class Social extends Component{
    
    render(){
        return(

            <div className="ui grid container center aligned">
                <div className="row">
                    <div className="header">OJT</div>
                </div>

                <div className="row">
                    <div className="left aligned six wide computer eight wide tablet sixteen wide mobile column">
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
                                <button className="ui blue submit button">Login</button>
                               
                                <div className="ui horizontal divider">OR </div>
                                <FacebookLogin />                          
                                <GoogleLogin />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Social;