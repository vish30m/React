import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Complaint extends React.Component {
  state = {
    complaints: [],
    complaint:{}
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/complaints")
      .then((response) => {
        console.log(response);
        this.setState({ complaints: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container">
        
        <table className="table table-primary mx-auto mt-3">
          <thead>
            <tr>
              <th>ComplaintId</th>
              <th>ProductModelNumber</th>
              <th>ComplaintName</th>
              <th>Status</th>
              <th>
                  ClientId
              </th>
              <th>
                  EngineerId
              </th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.complaints.map((complaint) => (
              <tr>
                  <td>{complaint.complaintId}</td>
                <td>{complaint.productModelNumber}</td>
                <td>{complaint.complaintName}</td>
                <td>{complaint.status}</td>
                <td>{complaint.clientId}</td>
                <td>{complaint.engineerId}</td>
                <td>
                  <Link to={`/complaints/update/${complaint.complaintId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-outline-secondary me-2" />
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        { <Link
          to="/complaints/add"
          className="btn btn-primary btn-large mb-1 float-end" >
          BookComplaint
        </Link> }
      </div>
    );
  }
}

export default Complaint;