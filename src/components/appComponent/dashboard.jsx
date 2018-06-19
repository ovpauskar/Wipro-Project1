import React, { Component } from 'react'
import { Menu } from "semantic-ui-react";
import { MockData } from "../mockComponent/mockData";
export  class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockdata: MockData
    }
  }
  componentDidMount() {
    document.getElementById("set_user_name").innerHTML = localStorage.getItem("user_name");
  }
  render() {
    const title = <h3> Mock Data</h3>
    const data = this.state.mockdata.map(mdata => {
      return (
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
    return <div className="ui container">
        <div class="ui segments">
          {title}
          <span id="set_user_name" />
          <table className="ui blue table striped  celled   table">
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
            <tbody>{data}</tbody>
          </table>
        </div>
      </div>;
  }
}
