import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import UpdateClient from "./updateclient";

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "",   clients: [],
    client:{}

  }
  
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);};

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    // this.props.match.params.complaintId
    event.preventDefault();
    axios
      .get(`http://localhost:8080/api/getAll/${this.state.search}`)
      .then((res) => {
        /* const client = { ...this.state.client };
        client.clientId = res.data.clientId;
        client.address = res.data.address;
        client.password = res.data.password;
        client.phoneNumber = res.data.phoneNumber;
        console.log(res.data);
        console.log(client); */

        this.setState({ client: res.data });
      })
      .catch((error) => console.log(error));
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/getAll")
      .then((response) => {
        console.log(response);
        this.setState({ clients: response.data });
      })
      .catch((error) => console.log(error));
  }

  handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/removeClient/${id}`).then((res) => {
      const clients = this.state.clients.filter((std) => std.clientId != id);
      this.setState({ clients: clients });
    });
  };

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="search"
              name="search"
              placeholder="Enter the id"
              className="mt-5 ms-3"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" className="btn btn-dark ms-3" value="Submit" />
        </form>
       
        <table className="table table-striped border-dark border w-75 mx-auto padding mt-5">
          <thead>
            <tr>
              <th>ClientId</th>
              <th>Password</th>
              <th>Address</th>
              <th>ContactNo</th>
              <th colSpan="2">Actions</th>
              {/* <th>password</th>  */}
            </tr>
          </thead>
          <tbody>
            {this.state.clients.map((client) => (
              <tr>
                <td>{client.clientId}</td>
                <td>Hidden</td>
                <td>{client.address}</td>
                <td>{client.phoneNumber}</td>
                <td>
                  <Link
                    to={`/updateclient/${client.clientId}.`}
                    className="btn btn-primary btn-large mb-1 float-end" >
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary"
                     
                    />
                  </Link>
                </td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(client.clientId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
          <Link
            to="/saveclient"
            className="btn btn-primary btn-large mb-1 float-end"
          >
            Add
          </Link>
        }
      </div>
    );
  }
}

export default Client;