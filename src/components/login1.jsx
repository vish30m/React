import React, { Component } from "react";
import axios from "axios";

class Login1 extends React.Component {
  state = {
    regi: {
      email: "",
      password: "",
      role: "",
    },
  };

  // componentDidMount() {
  //   axios
  //     .get(``)
  //     .then((res) => {
  //       const regi = { ...this.state.regi };
  //       regi.emailId = res.data.login.emailId;
  //       regi.password = res.data.login.password;
  //       regi.role = res.data.role;
  //       console.log(res.data);
  //       console.log(regi);
  //       this.setState({ regi: regi });
  //     })
  //     .catch((err) => console.log(err));
  // }
  handleChange = (event) => {
    const regi = { ...this.state.regi };
    regi[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ regi: regi });
  };
  /////////
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // const regi = {
    //   email: this.state.regi.email,

    //   password: this.state.regi.password,
    //   role: this.state.regi.role,
    // };
    
    axios
      .post("http://localhost:8080/Abc/login",this.state.regi)
      .then((res) => {
        this.props.history.push("/home");

        this.setState({
          regi: {
            email: "",
            password: "",
            role: "",
          },
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="m-3">
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow-lg p-3 bg-body rounded"
        >
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.regi.email}
              name="email"
              onChange={this.handleChange}
              required
              placeholder="Enter your Email"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.regi.password}
              name="password"
              onChange={this.handleChange}
              required
              //pattern=".{8,}"
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.regi.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected className="text-center">
              Select Role
            </option>
            <option className="text-center" value="admin">
              Admin
            </option>
            <option className="text-center" value="engineer">
              Engineer
            </option>
            <option className="text-center" value="client">
              Client
            </option>
          </select>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login1;