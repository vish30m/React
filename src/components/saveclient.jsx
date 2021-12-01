import axios from "axios";
import React, { Component } from "react";


class Saveclient extends React.Component 
{
  state = {
    client: {
      clientId:" ",
      password: "",
      address: "",
      phoneNumber:"",
      // complaints:"",
    },
    
  };

 /*  const schema = {
    clientId: Joi.string().required(),
    password: Joi.string().min(3).required(),
    phoneNumber: Joi.string().required(),
    address: Joi.string().required(),
  };

validate = () => {
    const errors = {};
    const result = Joi.validate(client, schema, { abortEarly: false });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  }; */
  handleChange = (event) => {
    const client = { ...this.state.client };
    client[event.target.name] = event.target.value;

    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ client: client });
  };
  handleSubmit = (event) => 
  {
    event.preventDefault();
    console.log("handleSubmit");
    const client = 
    {
        //employeeId:0,
        clientId: this.state.client.clientId,
        address: this.state.client.address,
        password: this.state.client.password,
        phoneNumber:this.state.client.phoneNumber

        // complaint:{
        // complaintId: this.state.engineer.complaintId,
        // }

    };
    axios
      .post("http://localhost:8080/api/saveClient", this.state.client)
      .then((res) => {
        this.props.history.push("/client");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Save Client</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Client ID
            </label>
            <input
              type="clientId"
              className="form-control"
              id="exampleInputName"
              value={this.state.client.clientId}
              name="clientId"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputDomain1" className="form-label">
              Address
            </label>
            <input
              type="domain"
              className="form-control"
              id="exampleInputDomain1"
              value={this.state.client.address}
              name="address"
              onChange={this.handleChange}
            />
            
          </div>

          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputName"
              value={this.state.client.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Phone Number
            </label>
            <input
              type="phoneNumber"
              className="form-control"
              id="exampleInputName"
              value={this.state.client.phoneNumber}
              name="phoneNumber"
              onChange={this.handleChange}
            />
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary"  >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Saveclient;