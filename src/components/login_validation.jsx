import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';

export default class Login extends Component {
    constructor() {
      super();
    
       this.state = {
        fields: {},
        errors: {}
    }
 }  
 handleValidation(){
     let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;

    //UserName
     if(!fields["UserName"]){
        formIsValid = false;
        errors["UserName"] = "Should not be empty";
     }
     if(typeof fields["UserName"] !== "undefined"){
        if(!fields["UserName"].match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors["UserName"] = "Only Alphabets";
        }        
     }
        //Password
      if(!fields["Password"]){
        formIsValid = false;
        errors["Password"] = "Should not be empty";
     }
     if(typeof fields["Password"] !== "undefined"){
        if(!fields["Password"].match(/^\(?([0-9]{2})\)?[-. ]?([a-zA-Z]{3})[-. ]?([d#$@!%&*]{1})$/)){
           formIsValid = false;
           errors["Password"] = "Password should be only alphanumeric values";
        }        
     }
    }
     contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
         alert("Form submitted");
      }else{
         alert("Form has errors.")
      }
  }
  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;         
      this.setState({fields});
  }
       
       render() {
        return (
          <div className="ui center aligned grid container">          
               <form  className=" ui form "  onSubmit= {this.contactSubmit.bind(this)}>
             <div className="field">
              <label> UserName </label>
                           <input ref="UserName" type="text" size="30" placeholder="UserName" onChange={this.handleChange.bind(this, "UserName")} value={this.state.fields["UserName"]}/>
                           <span style={{color: "red"}}>{this.state.errors["UserName"]}</span>
                           </div>    
         
             <div className="field">
             <label>Password</label>
                         <input refs="Password" type="password" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "Password")} value={this.state.fields["Password"]}/>
                         <span style={{color: "red"}}>{this.state.errors["Password"]}</span>
                         </div>

                   <button className="ui blue basic button">
          Login
          </button>
               
          <br/>
                <br/>
          <button className="ui basic button">
          Forgotten Password
          </button>
                 <h3>Or</h3>
        
         
          <button className="ui red basic button">
          Facebook
          </button>
          
          <button className="ui red basic button">
          Google
          </button>
          
          <button className="ui red basic button">
          Twitter
          </button>
          
          <button className="ui red basic button">
          LinkedIn
          </button>
</form>
</div>
        );
      }
    }