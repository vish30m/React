import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";

import TableCell from "@material-ui/core/TableCell";

import TableContainer from "@material-ui/core/TableContainer";

import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
class Product extends React.Component {
  state = {
    product: {
      dateofPurchase: "",
      modelNumber: "",
      productCategoryName: "",
      productName: "",
      warrantyDate: "",
      warrentyYears: "",
    },
    products: [],
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/getProduct/${this.props.match.params.complaintId}`
      )
      .then((res) => {
        const product = { ...this.state.product };
        product.modelNumber = res.data.modelNumber;
        product.productCategoryName = res.data.productCategoryName;
        product.productName = res.data.productName;
        product.warrantyDate = res.data.warrantyDate;
        product.warrentyYears = res.data.warrentyYears;
        product.dateofPurchase = res.data.dateofPurchase;
        console.log(res.data);
        console.log(product);
        this.setState({ product: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            

            <TableCell align="center">ProductCategoryName</TableCell>

            <TableCell align="center">ProductModelNumber</TableCell>

            <TableCell align="center">ProductName</TableCell>
            <TableCell align="center">Warranty Date</TableCell>
            <TableCell align="center">Warranty Years</TableCell>
            <TableCell align="center">Date Of Purchase</TableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
        <TableRow>
                <TableCell component="th" scope="row">
                  {this.state.product.productModelNumber}
                </TableCell>

                <TableCell align="center">
                  {this.state.product.productCategoryName}
                </TableCell>

                <TableCell align="center">
                  {this.state.product.productName}
                </TableCell>

                <TableCell align="center">{this.state.product.warrantyDate}</TableCell>
                <TableCell align="center">{this.state.product.warrentyYears}</TableCell>

                <TableCell align="center">{this.state.product.dateofPurchase}</TableCell>
              </TableRow>
           
         
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
}

export default Product;
