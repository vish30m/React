import React, { Component } from 'react';
import Table from "@material-ui/core/Table";
import { connect } from "react-redux";
import TableBody from "@material-ui/core/TableBody";

import TableCell from "@material-ui/core/TableCell";

import TableContainer from "@material-ui/core/TableContainer";

import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
import { getEngineerAction } from '../actions/detail-action';
class Engineerredux extends React.Component {
    componentDidMount() {
        this.props.getEngineerAction();
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
                    {this.props.engineer.employeeId}
                  </TableCell>
    
                  <TableCell align="center">
                    {this.props.engineer.engineerName}
                  </TableCell>
    
                  <TableCell align="center">{this.props.engineer.domain}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        );
}
}
const mapStateToProps = (state) => {
    //  const { fakestore } = state;
    return {
      engineer: state.engineer.engineer,
    };
  };
  
  // function to dispatch actions
  const mapDispatchToProps = (dispatch) => {
    return {
    getEngineerAction
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps())(Engineerredux);
  
