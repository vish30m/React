import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

class Admin extends React.Component {
  state = {
    admins: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/getAdmins")
      .then((response) => {
        console.log(response);
        this.setState({ admins: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container">
        
        <table className="table table-striped border-dark border w-75 mx-auto padding mt-5">
          <thead>
            <tr>
              <th>AdminId</th>
              <th>FullName</th>
              <th>ContactNumber</th>
              <th>EmailId</th>
              {/* <th>role</th> */}
                <th>password</th>  *
            </tr>
          </thead>
          <tbody>
            {this.state.admins.map((admin) => (
              <tr>
                <td>{admin.adminId}</td>
                <td>{admin.fullName}</td>
                <td>{admin.contactNumber}</td>
                <td>{admin.emailId}</td>
                  <td>{admin.password}</td>  
                {/* <input
                type="button"
                value="Update"
                className="btn btn-secondary me-2"
                /> */}
              </tr>
            ))}
          </tbody>
        </table>
         { <Link
          to="/getAdmins/add"
          className="btn btn-primary btn-large mb-1 float-end" >
          Add
        </Link> } 
        { <Link
          to="/getAdmins/complaintByStatus"
          className="btn btn-primary btn-large mb-1 float-start" >
          complaintBystatus
        </Link> } 
        
        { <Link
          to="/getAdmins/addEngineer"
          className="btn btn-primary btn-large mb-1 ms-5 float-start" >
          addEngineer
        </Link> } 
        { <Link
          to="/getAdmins/getProducts"
          className="btn btn-primary btn-large mb-1 ms-5 float-start" >
         getProducts
        </Link> } 
      </div>
    );
  }
}

export default Admin;