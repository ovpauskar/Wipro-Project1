import React, { Component } from 'react'
//import 'semantic-ui-css/semantic.min.css';
//import { FormGroup } from 'semantic-ui-react';

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
           errors["FirstName"] = "Firstname should not be Blank";
        }

        if(typeof fields["FirstName"] !== "undefined"){
           if(!fields["FirstName"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["FirstName"] = "Only letters";
           }        
        }
        //LastName
        if(!fields["lastName"]){
            formIsValid = false;
            errors["lastName"] = "Lastname should not be Blank";
         }
 
         if(typeof fields["lastName"] !== "undefined"){
            if(!fields["lastName"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["lastName"] = "Only letters";
            }        
         }
        
 
         //Password
      if(!fields["Password"]){
        formIsValid = false;
        errors["Password"] = "Password should not be Blank";
     }
     if(typeof fields["Password"] !== "undefined"){
        if(!fields["Password"].match(/^[A-Za-z0-9\d#$@!%&*?]+$/)){
           formIsValid = false;
           errors["Password"] = "Only Alphanumeric values";
        }   }     
      // MobileNo
     
    if(!fields["MobileNo"]){
        formIsValid = false;
        errors["MobileNo"] = "Mobileno should not be Blank";
     }

       
        //Email
        if(!fields["EmailId"]){
           formIsValid = false;
           errors["EmailId"] = "Emailid should not be Blank";
        }

        if(typeof fields["EmailId"] !== "undefined"){
           let lastAtPos = fields["EmailId"].lastIndexOf('@');
           let lastDotPos = fields["EmailId"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["EmailId"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["EmailId"].length - lastDotPos) > 2)) {
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
           alert("Form submitted..");
        }else{
           alert("Form having errors...")
        }

    }
      

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;     
           
        this.setState({fields});
    }

    render(){
        return (
            <div class="ui center aligned grid container">          
               <form  className=" ui form "  onSubmit= {this.contactSubmit.bind(this)}>
             <div class="field">
              <label> FirstName </label>
                           <input ref="FirstName" type="text" size="25" placeholder="FirstName" 
                           onChange={this.handleChange.bind(this, "FirstName")} 
                           value={this.state.fields["FirstName"]}/>
                           <span style={{color: "red"}}>{this.state.errors["FirstName"]}</span>
                           </div>
                        
                          
             <div class="field">
             <label> LastName </label>
                          <input ref="lastName" type="text" size="25" placeholder="LastName" 
                          onChange={this.handleChange.bind(this, "lastName")}
                           value={this.state.fields["lastName"]}/>
                           <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
                           </div>   
                            
             <div class="field">                        
              <label> EmailId</label>
                         <input refs="EmailId" type="text" size="25" placeholder="EmailId"
                          onChange={this.handleChange.bind(this, "EmailId")}
                           value={this.state.fields["EmailId"]}/>
                         <span style={{color: "red"}}>{this.state.errors["EmailId"]}</span>
                         </div>  
                
             
              
             <div class="field">
             <label>Password</label>
                         <input refs="Password" type="password" size="25" placeholder="Password"
                          onChange={this.handleChange.bind(this, "Password")} 
                          value={this.state.fields["Password"]}/>
                         <span style={{color: "red"}}>{this.state.errors["Password"]}</span>
                         </div> 

                         <div class="field">
              <label>    MobileNo </label>
                         <input refs=" MobileNo" type="tel" size="25" placeholder="Enter 10digit MobileNo" required maxLength={10}
                          onChange={this.handleChange.bind(this, "MobileNo")}
                           value={this.state.fields["MobileNo"]}/>
                         <span style={{color: "red"}}>{this.state.errors["MobileNo"]}</span>
                         </div> 
                         
             
             <button class="ui blue button" role ="button">Submit</button>

              </form>
            </div>
      )
    }
}
export default Test;