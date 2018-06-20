import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';


 


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            authorized:false,
        }
    }

      responseGoogle = (response) => {
        console.log("SUCCESS");
        console.log(response);
    this.setState({authorized:true})
      }
      
      responseGoogleFailure = (response) => {
          console.log("FAILURE");
          console.log(response);
        }

    render(){
        return(
            <div>
            <GoogleLogin
              clientId="846832770923-nq1asqrnbgordka380aee3fu0th7kk7l.apps.googleusercontent.com"
            //   buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogleFailure}
           >
    <span> Login with Google</span>
  </GoogleLogin>
 {this.state.authorized? <Redirect to="/dashboard" />:<div/>}
           </div>

        );
    }

}