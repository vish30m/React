import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Products extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/getProducts")
      .then((res) => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleDelete = (eid) => {
    axios
      .delete(`http://localhost:8080/api/deleteProduct/${eid}`)
      .then((res) => {
        const products = this.state.products.filter(
          (std) => std.modelNumber != eid
        );
        this.setState({ products: products });
      });
  };
  render() {
    return (
      <div className="container mt-3">
        <Link
          to="/getProducts/add"
          className="btn btn-secondary btn-large mb-1 float-end"
        >
          Add Product
        </Link>
        <table className="table table-secondary table-striped table-hover mx-auto mt-3">
          <thead>
            <tr>
              <th>ModelNumber</th>
              <th>ProductName</th>
              <th>ProductCategoryName</th>
              <th>DateofPurchase</th>
              <th>WarrantyYears</th>
              <th>WarrantyDate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr>
                <td>{product.modelNumber}</td>
                <td>{product.productName}</td>
                <td>{product.productCategoryName}</td>
                <td>{product.dateofPurchase}</td>
                <td>{product.warrantyYears}</td>
                <td>{product.warrantyDate}</td>
                <td>
                  <Link to={`/getProducts/update/${product.modelNumber}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2 "
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(product.modelNumber)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
