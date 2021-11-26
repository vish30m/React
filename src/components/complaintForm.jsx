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
        console.log(res);
        this.props.history.push("/complaint");
      })
      .catch((err) => console.log(err));
      alert("complaint is booked");
  };

  render() {
    return (
      <div>
        <h3>BookComplaint</h3>
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
             required
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
              required
            />
          </div>
          {/* <div className="mb-3">
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
            </div>*/}
            <label for="exampleInputEmail1" className="form-label">
                Status

            </label>
             <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.complaint.status}
            name="status"
            onChange={this.handleChange}
            required
          >
            <option selected>Status</option>
            <option value="open">open</option>
            <option value="close">close</option>
            <option value="resolved">Resolved</option>
            <option value="resolve online">ResolveOnline</option>
            <option value="resolved after homevisit">Resolve After homeVisit</option>
          </select>
             {/* <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.complaint.status}
            name="status"
            onChange={this.handleChange}
          >
            <option selected>status</option>
            <option value="student">open</option>
            <option value="admin">close</option>
            <option value="admin">resolve online</option>
            <option value="admin">resolve after homevisit</option>
            <option value="admin">reslved</option>
            

          </select> */}
          
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
              required
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
              required
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