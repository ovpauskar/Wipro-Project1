import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {browserHistory } from 'react-router'
import { Button } from "semantic-ui-react";
//Assets
import facebook from './facebook.png'
import config from '../config';

class FacebookLogin extends Component{
    constructor(props){
        super(props);
        this.state = {RedirectPage : false};
    }
    componentDidMount(){
        // Load the required SDK asynchronously for facebook
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : config.facebook,
              autoLogAppEvents: true,
              cookie     : true,  // enable cookies to allow the server to access the session
              xfbml      : true,  // parse social plugins on this page
              version    : 'v2.8' // use version 2.1
            });
        };
    }
    
    facebookLogin = () => {
        window.FB.login(
            this.checkLoginState(), 
            { scope : 'email, public_profile' } //You can add scope whatever you required about the FB user data
        ); 
        
        window.FB.login(
            function(resp){
                this.statusChangeCallback(resp);
            }.bind(this),{ scope : 'email,user_work_history,user_education_history,user_location,public_profile' });
    }
    
    checkLoginState() {
        console.log( "Checking login status..........." );
        window.FB.getLoginStatus(function(response) {
            console.log(response)
            this.statusChangeCallback(response);
        }.bind(this));
    }
    
    statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.fetchDataFacebook();
        } else if (response.authResponse == undefined && response.status == "unknown") {
            console.log("Once again please login with facebook");
               } else {
            console.log("Once again please login with facebook");
               }
    }
    
    fetchDataFacebook = () => {
        console.log('Welcome!  Fetching your information.... ');

        window.FB.api('/me', function(user) {
            console.log( user );
            console.log('Successful login from facebook : ' + user.name);
           localStorage.setItem('user_name', user.name);
        });
        this.setState({ RedirectPage: true });
    }

    render(){
        if(this.state.RedirectPage){
            browserHistory.push("/dashboard");
        }
        return (
            <Button className="ui facebook button" onClick={() => this.facebookLogin()}>
              <i className="facebook icon" />
             Facebook
            </Button>
        )
    }
}

export default FacebookLogin;
