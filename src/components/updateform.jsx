import React, { Component } from "react";
import axios from "axios";

class UpdateProduct extends React.Component {
  state = {
    product: {
      // modelNumber: "",
      productCategoryName: "",
      productName: "",
      warrantyYears: "",
      dateofPurchase: "",
      warrantyDate: "",
    },
  };
  // getDate() {
  //   var date = { currentTime: new Date().toLocaleString() };

  //   this.setState({
  //     date: date,
  //   });
  // }
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/getProduct/${this.props.match.params.modelNumber}`
      )
      .then((res) => {
        const product = { ...this.state.product };

        //product.modelNumber = res.data.modelNumber;
        product.productCategoryName = res.data.productCategoryName;
        product.productName = res.data.productName;
        product.warrantyYears = res.data.warrantyYears;
        product.dateofPurchase = res.data.dateofPurchase;
        product.warrantyDate = res.data.warrantyDate;
        console.log(res.data);
        console.log(product);
        this.setState({ product: product });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const product = { ...this.state.product };
    product[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ product: product });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const product = {
      modelNumber: this.props.match.params.modelNumber,
      productCategoryName: this.state.product.productCategoryName,
      productName: this.state.product.productName,
      warrantyYears: this.state.product.warrantyYears,
      dateofPurchase: this.state.product.dateofPurchase,
      warrantyDate: this.state.product.warrantyDate,
    };
    axios
      .put("http://localhost:8080/api/updateProduct/{modelNumber}", product)
      .then((res) => {
        this.props.history.push("/product");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h3>Update Form</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          {/* <div className="mb-3">
            <label for="exampleInputModel" className="form-label">
              Model Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputModel"
              value={this.state.product.modelNumber}
              name="modelNumber"*
              onChange={this.handleChange}
            />
          </div> */}
          <div className="mb-3">
            <label for="exampleInputCategory" className="form-label">
              Product Category Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputCategory"
              value={this.state.product.productCategoryName}
              name="productCategoryName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.product.productName}
              name="productName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputYears" className="form-label">
              Warranty Years
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputYears"
              value={this.state.product.warrantyYears}
              name="warrantyYears"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPurchase" className="form-label">
              Date of Purchase
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPurchase"
              value={this.state.product.dateofPurchase}
              name="dateofPurchase"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputDate" className="form-label">
              Warranty Date
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDate"
              value={this.state.product.warrantyDate}
              name="warrantyDate"
              onChange={this.handleChange}
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

export default UpdateProduct;