import React, { Component } from "react";
import axios from "axios";
class Updateengineer extends React.Component {
  state = {
    engineer: {
      domain: "",
      engineerName: "",
      password: "",
    },
  };
  componentDidMount() {
    //this.props.match.params.id;
    axios
      .get(
        `http://localhost:8080/getEngineer/${this.props.match.params.employeeId}`
      )
      .then((res) => this.setState({ engineer: res.data }))
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    const engineer = { ...this.state.engineer }; // copying engineer object
    engineer[event.target.name] = event.target.value;

    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ engineer: engineer });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const engineer = {
      domain: this.state.engineer.domain,
      engineerName: this.state.engineer.engineerName,
      password: this.state.engineer.password,
    };
    axios
      .put(
        `http://localhost:8080/changeDomain/${this.props.match.params.employeeId}`,
        this.state.engineer
      )
      .then((res) => {
        this.props.history.push("/engineers");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Update Domain</h3>
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

export default Updateengineer;
