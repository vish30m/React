import React from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";

import TableCell from "@material-ui/core/TableCell";

import TableContainer from "@material-ui/core/TableContainer";

import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
class Sid extends React.Component {
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
      .get(`http://localhost:8080/api/getAllComplaint/${this.state.value}`)
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
          <label>
            <b>Search</b>
            <input
              type="tel"
              className="mt-5 ms-3"
              required
              placeholder="clientId"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            className="btn btn-dark   ms-3"
            value="Submit"
            style={{
              color: "white",
            }}
          />
        </form>
        <Paper>
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>ComplaintId</TableCell>

                  <TableCell align="center">ComplaintName</TableCell>

                  <TableCell align="center">ProductModelNumber</TableCell>

                  <TableCell align="center">Status</TableCell>

                  <TableCell align="center">ProductDetails</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.complaints.map((complaint, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {complaint.complaintId}
                      </TableCell>

                      <TableCell align="center">
                        {complaint.productModelNumber}
                      </TableCell>

                      <TableCell align="center">
                        {complaint.complaintName}
                      </TableCell>

                      <TableCell align="center">{complaint.status}</TableCell>

                      <TableCell align="center">
                        <Link
                          to={`/complaints/productdetails/${complaint.complaintId}`}
                        >
                          <input
                            type="button"
                            value="ProductDetails"
                            className="btn btn-outline-secondary me-2"
                          />
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  }
}

export default Sid;
