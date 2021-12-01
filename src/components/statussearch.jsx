import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Statussearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", complaints: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    axios
      .get(`http://localhost:8080/getComplaints/${this.state.value}`)
      .then((res) => {
        const complaint = { ...this.state.complaint };
        complaint.complaintId = res.data.complaintId;
        complaint.productModelNumber = res.data.productModelNumber;
        complaint.complaintName = res.data.complaintName;
        complaint.status = res.data.status;
        complaint.clientId = res.data.clientId;
        complaint.engineerId = res.data.engineerId;
        console.log(res.data);
        console.log(complaint);

        this.setState({ complaints: res.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container ">
        <form onSubmit={this.handleSubmit}>
          <label for="exampleInputEmail1" className="form-label"></label>
          <select
            className=" w-50 mx-auto form-select mb-3"
            aria-label="Default select example"
            value={this.state.value}
            name="status"
            onChange={this.handleChange}
            required
          >
            <option selected>select</option>
            <option value="open">Open</option>
            <option value="resolved">Resolved</option>
          </select>
          <input type="submit" className="btn btn-dark   ms-3" value="Submit" />
        </form>

        <table className="table  table-striped table-hover border border-5 border-dark mx-auto mt-5 ">
          <thead className="table-info">
            <tr>
              <th>ComplaintId</th>
              <th>ProductModelNumber</th>
              <th>ComplaintName</th>
              <th>Engineer Id</th>
              <th>Status</th>
              <th>Actions</th>
              {/* <th>
              ClientId
          </th>
          <th>
              EngineerId
          </th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.complaints.map((complaint) => (
              <tr>
                <td>{complaint.complaintId}</td>
                <td>{complaint.productModelNumber}</td>
                <td>{complaint.complaintName}</td>
                <td>{complaint.engineerId}</td>
                <td>{complaint.status}</td>
                {/* <td>{complaint.clientId}</td>
            <td>{complaint.engineerId}</td> */}
                <td>
                  <Link to="/updatecomplaint1">
                    <input
                      type="button"
                      value="change status"
                      className="btn btn-success mt-2"
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

export default Statussearch;