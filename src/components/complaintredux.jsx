import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";

import TableCell from "@material-ui/core/TableCell";

import TableContainer from "@material-ui/core/TableContainer";

import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";

import axios from "axios";
import { Link } from "react-router-dom";

import {
  getAllComplaintsAction,
  deleteComplaintAction,
} from "../actions/complaint-action";

class ComplaintRedux extends React.Component {
  componentDidMount() {
    this.props.getAllComplaintsAction();
  }
  handleDelete = (id) => {
    this.props.deleteComplaintAction(id);
  };

  render() {
    return (
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>ComplaintId</TableCell>

              <TableCell align="center">ComplaintName</TableCell>

              <TableCell align="center">ProductModelNumber</TableCell>

              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Update</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Details Of Engineer</TableCell>
              <TableCell align="center">ProductDetails</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.props.complaints.map((complaint, index) => {
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
                    <Link to={`/complaints/update/${complaint.complaintId}`}>
                      <input
                        type="button"
                        value="Update"
                        className="btn btn-outline-secondary me-2"
                      />
                    </Link>
                  </TableCell>

                  <TableCell align="center">
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDelete(complaint.complaintId)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      className="ms-3"
                      to={`/complaints/engineerdetails/${complaint.complaintId}`}
                    >
                      <input
                        type="button"
                        value="EngineerDetails"
                        className="btn btn-outline-secondary me-2"
                      />
                    </Link>
                  </TableCell>
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
    );
  }
}

const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    complaints: state.complaint.complaints,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getAllComplaintsAction,
    deleteComplaintAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ComplaintRedux);
