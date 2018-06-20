import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { FormGroup } from 'semantic-ui-react';
class Test extends React.Component {
    constructor(props){
       super(props);
       this.state = {
           fields: {},
           errors: {}
       }
    }  
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
 
       //FirstName
        if(!fields["FirstName"]){
           formIsValid = false;
           errors["FirstName"] = "Should not be empty";
        }
        if(typeof fields["FirstName"] !== "undefined"){
           if(!fields["FirstName"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["FirstName"] = "Only Alphabets";
           }        
        }
      //lastName
      if(!fields["lastName"]){
        formIsValid = false;
        errors["lastName"] = "Should not be empty";
     }
     if(typeof fields["lastName"] !== "undefined"){
        if(!fields["lastName"].match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors["lastName"] = "Only Alphabets";
        }        
     }
   
         // MobileNo
    if(!fields["MobileNo"]){
        formIsValid = false;
        errors["MobileNo"] = "Should not be empty";
     }
     if(typeof fields["MobileNo"] !== "undefined"){
        if(!fields["MobileNo"].match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
           formIsValid = false;
           errors["MobileNo"] = "Should be 10 digits Only";
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
      //ConfirmationPassword
     if(!fields["ConfirmationPassword"]){
        formIsValid = false;
        errors["ConfirmationPassword"] = "Should not be empty";
     }
     if(typeof fields["ConfirmationPassword"] !== "undefined"){
        if(!fields["ConfirmationPassword"].match(fields["Password"])){
           formIsValid = false;
           errors["ConfirmationPassword"] = "ConfirmationPassword should be match";
        }        
     }
     
        //Email
        if(!fields["EmailId"]){
           formIsValid = false;
           errors["EmailId"] = "Should not be empty";
        }

        if(typeof fields["EmailId"] !== "undefined"){
           let lastAtPos = fields["EmailId"].lastIndexOf('@');
           let lastDotPos = fields["EmailId"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["EmailId"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["EmailId"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["EmailId"] = "EmailId is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
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
    render(){
        return (
            <div className="ui center aligned grid container">          
               <form  className=" ui form "  onSubmit= {this.contactSubmit.bind(this)}>
             <div className="field">
              <label> FirstName </label>
                           <input ref="FirstName" type="text" size="30" placeholder="FirstName" onChange={this.handleChange.bind(this, "FirstName")} value={this.state.fields["FirstName"]}/>
                           <span style={{color: "red"}}>{this.state.errors["FirstName"]}</span>
                           </div>        
             <div className="field">
             <label> lastName </label>
                          <input ref="lastName" type="text" size="30" placeholder=" lastName" onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"]}/>
                           <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
                           </div>   
                            
             <div className="field">                        
              <label> EmailId</label>
                         <input refs="EmailId" type="text" size="30" placeholder="EmailId" onChange={this.handleChange.bind(this, "EmailId")} value={this.state.fields["EmailId"]}/>
                         <span style={{color: "red"}}>{this.state.errors["EmailId"]}</span>
                         </div>  
                
             <div className="field">
              <label>    MobileNo </label>
                         <input refs=" MobileNo" type="number" size="30" placeholder="MobileNo" onChange={this.handleChange.bind(this, "MobileNo")} value={this.state.fields["MobileNo"]}/>
                         <span style={{color: "red"}}>{this.state.errors["MobileNo"]}</span>
                         </div>
              
             <div className="field">
             <label>Password</label>
                         <input refs="Password" type="password" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "Password")} value={this.state.fields["Password"]}/>
                         <span style={{color: "red"}}>{this.state.errors["Password"]}</span>
                         </div>  
                         
             <div className="field">
              <label> ConfirmationPassword</label>
                              <input refs="ConfirmationPassword" type="password" size="30" placeholder="ConfirmationPassword" onChange={this.handleChange.bind(this, "ConfirmationPassword")} value={this.state.fields["ConfirmationPassword"]}/>
                          <span style={{color: "red"}}>{this.state.errors["ConfirmationPassword"]}</span>
                          </div> 
             <button className="ui green button" role="button">submit</button>

              </form>
            </div>
      )
    }
}
export default Test;