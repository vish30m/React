import axios from "axios";
import React, { Component } from "react";
//import Complaint from "./complaint";

class ComplaintForm extends React.Component {
  state = {
    complaint: {
      complaintId:"",
      productModelNumber: "",
      complaintName: "",
      status: "",
     clientId: "",
     engineerId: "",
    },
  };
  handleChange = (event) => {
    const complaint = { ...this.state.complaint }; 
    complaint[event.target.name] = event.target.value; 
   
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ complaint: complaint });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const complaints= {
      
      clientId: this.state.complaint.clientId,
      complaintId: this.state.complaint.complaintId,
      complaintName: this.state.complaint.complaintName,
      engineerId: this.state.complaint.engineerId,
      productModelNumber: this.state.complaint.productModelNumber,
      status: this.state.complaint.status
    
   
  }
    axios
      .post("http://localhost:8080/api/Complaints", this.state.complaint)
      .then((res) => {
        this.props.history.push("/complaint");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3  ">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              ProductModelNumber
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.complaint.productModelNumber}
              name="productModelNumber"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              ComplaintName
            </label>
            <input
              type="text"
              className="form-control"
              
             
              value={this.state.complaint.complaintName}
              name="complaintName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
                Status

            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.complaint.status}
              name="status"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
             clientId
            </label>
            <input
              type="tel"
              className="form-control"
             
              value={this.state.complaint.clientId}
              name="clientId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
             engineerId
            </label>
            <input
              type="tel"
              className="form-control"
             
              value={this.state.complaint.engineerId}
              name="engineerId"
              onChange={this.handleChange}
            />
          </div>
          
          
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ComplaintForm;