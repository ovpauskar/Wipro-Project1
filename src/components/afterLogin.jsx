import React, { Component } from 'react';
import { MockData } from './mockData';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';


export default class AfterLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            mockdata : MockData,
            authorized:false
        }
    }

    //  logout = (response) => {
    //     console.log("SUCCESS");
    // this.setState({authorized:true})
    //   }
      
    //   logoutFailure = (response) => {
    //       console.log("FAILURE");
    //       console.log(response);
    //     }

  render() {
      const title = <h3>After Login : Mock Data</h3>
      const data = this.state.mockdata.map(mdata =>{
                    return(
                        <tr key={mdata.Slno}>
                            <td>{mdata.Slno}</td>
                            <td>{mdata.Openend}</td>
                            <td>{mdata.TargetDueDate}</td>
                            <td>{mdata.Status}</td>
                            <td>{mdata.LastUpdate}</td>
                            <td>{mdata.RequestItem}</td>

                        </tr>
                    )
      })
    return (
      <div className="ui container">
      <div class="ui segments">
        {title}

        <table className="ui blue table striped">
            <thead>
            <tr>
            <th>Number</th>
            <th>Opened</th>
            <th>Target due date</th>
            <th>Status</th>
            <th>Last update</th>
            <th>Request item</th>
            </tr>
            </thead>
            <tbody>
            {data}
            </tbody>
        </table>
      </div>
      {/* <GoogleLogout
       clientId="846832770923-nq1asqrnbgordka380aee3fu0th7kk7l.apps.googleusercontent.com"
      buttonText="Logout"
      onSuccess={()=>alert("out")}
      onFailure={()=>alert("out")}
    >
    </GoogleLogout> */}

    {/* {this.state.authorized? <Redirect to="/" />:<div/>} */}

      </div>

    )
  }
}
