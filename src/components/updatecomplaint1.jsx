import React, { Component } from "react";
import axios from "axios";
class UpdateComplaint1 extends React.Component {
  state = {
    complaint: {
      complaintId: 0,
      productModelNumber: "",
      complaintName: "",
      status: "",
      clientId: "",
      engineerId: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/getComplaint/${this.state.complaint.complaintId}`
      )
      .then((res) => {
        //   const complaint={...this.state.complaint};
        //   complaint.complaintId = res.data.complaintId;
        //           complaint.productModelNumber = res.data.productModelNumber;
        //            complaint.complaintName = res.data.complaintName;
        //            complaint.status = res.data.status;
        //            complaint.clientId = res.data.clientId;
        //            complaint.engineerId = res.data.engineerId;
        // console.log(res.data);
        // console.log(complaint);
        this.setState({ complaint: res.data });
      })
      .catch((err) => console.log(err));
  }
  //   componentDidMount(){
  //       axios.get(
  //         `http://localhost:8080/api/getComplaint/${this.props.match.params.complaintId}`)
  //      .then((res) => {
  //         const complaint = { ...this.state.complaint };
  //         complaint.complaintId = res.data.complaintId;
  //         complaint.productModelNumber = res.data.productModelNumber;
  //         complaint.complaintName = res.data.complaintName;
  //         complaint.status = res.data.status;
  //         complaint.clientId = res.data.clientId;
  //         complaint.engineerId = res.data.engineerId;
  //         console.log(res.data);
  //         console.log(complaint);
  //         this.setState({ complaint: complaint });
  //       })
  //       .catch((err) => console.log(err));
  //   }
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
    // const complaint = {
    //   complaintId: this.props.match.params.complaintId,
    //   complaintName: this.state.complaint.complaintName,
    //   productModelNumber: this.state.complaint.productModelNumber,
    //   status: this.state.complaint.status,
    //   clientId: this.props.match.params.clientId,
    //   engineerId: this.props.match.params.engineerId,
    // };

    axios
      .put(
        `http://localhost:8080/updateComplaintbyStatus/${this.state.complaint.complaintId}`,
        this.state.complaint
      )
      .then((res) => {
        this.props.history.push("/statussearch");
      })
      .catch((err) => console.log(err));
    alert("status is updated");
  };

  render() {
    return (
      <div>
        <h3>Update Status</h3>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto border p-3  "
        >
          {/* <div className="mb-3">
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
          </div> */}
          <div className="mb-3">
            <label className="form-label">Complaint Id</label>
            <input
              type="text"
              className="form-control"
              value={this.state.complaint.complaintId}
              name="complaintId"
              onChange={this.handleChange}
            />
          </div>

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
            <option value="open">Open</option>
            <option value="resolved">Resolved</option>
          </select>

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

export default UpdateComplaint1;