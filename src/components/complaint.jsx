import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Complaint extends React.Component {
  state = {
    complaints: [],
    complaint: {},
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
  handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/deleteCode/${id}`).then((res) => {
      const complaints = this.state.complaints.filter(
        (std) => std.complaintId != id
      );
      this.setState({ complaints: complaints });
    });
  };

  render() {
    return (
      <div className="container ">
        {
          <Link
            to="/complaints/add"
            className="btn btn-primary btn-large mb-1 float-start ms-auto mt-5"
          >
            BookComplaint
          </Link>
        }
        {
          <Link
            to="/complaints/clientAllComplaints"
            className="btn btn-primary btn-large mb-3 float-start mt-5 ms-5"
          >
            ClientAllComplaints
          </Link>
        }

        {
          <Link
            to="/complaints/clientAllOpenComplaints"
            className="btn btn-primary btn-large mb-3 float-start mt-5 ms-5"
          >
            ClientAllOpenComplaint
          </Link>
        }
        <table className="table  table-striped table-hover border border-5 border-dark mx-auto mt-5 ">
          <thead className="table-info">
            <tr>
              <th>ComplaintId</th>
              <th>ProductModelNumber</th>
              <th>ComplaintName</th>
              <th>Status</th>
              {/* <th>
                  ClientId
              </th>
              <th>
                  EngineerId
              </th> */}
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
                {/* <td>{complaint.clientId}</td>
                <td>{complaint.engineerId}</td> */}
                <td>
                  <Link to={`/complaints/update/${complaint.complaintId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
                  </Link>

                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(complaint.complaintId)}
                  />
                  <Link
                    to={`/complaints/engineerdetails/${complaint.complaintId}`}
                  >
                    <input
                      type="button"
                      value="EngineerDetails"
                      className="btn btn-secondary me-2"
                    />
                  </Link>
                  <Link
                    to={`/complaints/productdetails/${complaint.complaintId}`}
                  >
                    <input
                      type="button"
                      value="ProductDetails"
                      className="btn btn-secondary me-2"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Complaint;
