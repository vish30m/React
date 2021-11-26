import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
   state = {
   product: {
    dateofPurchase: "",
    modelNumber: "",
    productCategoryName: "",
    productName: "",
    warrantyDate:"",
    warrentyYears: ""
    },
   products:[],
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/api/getProduct/${this.props.match.params.complaintId}`)
      .then((res) => {
        const product={...this.state.product};
             product.modelNumber= res.data.modelNumber;
                      product.productCategoryName = res.data.productCategoryName;
                      product.productName= res.data.productName;
                      product.warrantyDate = res.data.warrantyDate;
                      product.warrentyYears=res.data.warrentyYears;
                      product.dateofPurchase=res.data.dateofPurchase
            console.log(res.data);
            console.log(product);
            this.setState({product: res.data})})
          .catch((err)=> console.log(err));
      }
 
  render() {
    return (
      <div className="container">
       
        <table className="table table-info mt-5">
          <thead>
            <tr>
              
              <th>ModelNumber</th>
              <th>ProductCategoryName</th>
              <th>ProductName</th>
              <th>WarrantyYears</th>
              <th>WarrantyDate</th>
              <th>DateOfPurchase</th>
              
            </tr>
          </thead>
          <tbody>
            
              <tr>
              <td>{this.state.product.productCategoryName}</td>
                <td>{this.state.product.productName}</td>
                <td>
                  {this.state.product.modelNumber}
                  </td>
                  <td>{this.state.product.warrantyDate}</td>
                  
                <td>{this.state.product.dateofPurchase}</td>
                <td>{this.state.product.warrentyYears}</td>
                
              </tr>
           
          </tbody>
        </table>
      </div>
    );
  }
}

export default Product;