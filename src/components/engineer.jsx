import axios from "axios";
import React, { Component } from "react";


class Engineer extends React.Component {
   state = {
    engineer: {
      employeeId: "",
      engineerName: "",
      domain: "",
      password: "",
    },
    engineers:[],
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/api/getEngineer/${this.props.match.params.complaintId}`)
      .then((res) => {
        const engineer={...this.state.engineer};
              engineer.employeeId = res.data.employeeId;
                       engineer.engineerName = res.data.engineerName;
                       engineer.password = res.data.password;
                       engineer.domain = res.data.domain;
            console.log(res.data);
            console.log(engineer);
            this.setState({engineer: res.data})})
          .catch((err)=> console.log(err));
      }
 
  render() {
    return (
      <div className="container">
       
        <table className="table table-info mt-5">
          <thead>
            <tr>
              
              <th>Engineer Id</th>
              <th>Engineer Name</th>
              <th>Domain</th>
              
            </tr>
          </thead>
          <tbody>
            
              <tr>
              <td>{this.state.engineer.employeeId}</td>
                <td>{this.state.engineer.engineerName}</td>
                
                <td>{this.state.engineer.domain}</td>
                
              </tr>
           
          </tbody>
        </table>
      </div>
    );
  }
}

export default Engineer;