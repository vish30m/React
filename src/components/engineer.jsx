import axios from "axios";
import React, { Component } from "react";
import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";

import TableCell from "@material-ui/core/TableCell";

import TableContainer from "@material-ui/core/TableContainer";

import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
class Engineer extends React.Component {
  state = {
    engineer: {
      employeeId: "",
      engineerName: "",
      domain: "",
      password: "",
    },
    engineers: [],
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/getEngineer/${this.props.match.params.complaintId}`
      )
      .then((res) => {
        const engineer = { ...this.state.engineer };
        engineer.employeeId = res.data.employeeId;
        engineer.engineerName = res.data.engineerName;
        engineer.password = res.data.password;
        engineer.domain = res.data.domain;
        console.log(res.data);
        console.log(engineer);
        this.setState({ engineer: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">EmployeeId</TableCell>

              <TableCell align="center">EngineerName</TableCell>

              <TableCell align="center">Domain</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="center">
                {this.state.engineer.employeeId}
              </TableCell>

              <TableCell align="center">
                {this.state.engineer.engineerName}
              </TableCell>

              <TableCell align="center">{this.state.engineer.domain}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Engineer;
