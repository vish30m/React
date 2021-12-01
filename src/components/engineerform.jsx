import axios from "axios";
import React, { Component } from "react";

class Engineerform extends React.Component 
{
  state = {
    engineer: {
      // employeeId:" ",
      domain: "",
      engineerName: "",
      email:"",
      password:"",
      // complaints:"",
    },
  };
  handleChange = (event) => {
    const engineer = { ...this.state.engineer };
    engineer[event.target.name] = event.target.value;

    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ engineer: engineer });
  };
  handleSubmit = (event) => 
  {
    event.preventDefault();
    console.log("handleSubmit");
    const engineer = 
    {
        //employeeId:0,
        domain: this.state.engineer.domain,
        engineerName: this.state.engineer.engineerName,
        emailId:this.state.engineer.emailId,
        password: this.state.engineer.password,


        // complaint:{
        // complaintId: this.state.engineer.complaintId,
        // }

    };
    axios
      .post("http://localhost:8080/addEngineer", this.state.engineer)
      .then((res) => {
        this.props.history.push("/engineers");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>ADD Engineer</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Engineer Name
            </label>
            <input
              type="engineerName"
              className="form-control"
              id="exampleInputName"
              value={this.state.engineer.engineerName}
              name="engineerName"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Email Id
            </label>
            <input
              type="emailId"
              className="form-control"
              id="exampleInputName"
              value={this.state.engineer.email}
              name="email"
              onChange={this.handleChange}
              required
            />
          </div>


          <div className="mb-3">
            <label for="exampleInputDomain1" className="form-label">
              Domain
            </label>
            <input
              type="domain"
              className="form-control"
              id="exampleInputDomain1"
              value={this.state.engineer.domain}
              name="domain"
              onChange={this.handleChange}
              required
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
              value={this.state.engineer.password}
              name="password"
              onChange={this.handleChange}
              required
              placeholder="password should be conatain minimum 8 chars"
              pattern=".{8,}"
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
export default Engineerform;