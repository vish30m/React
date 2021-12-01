import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Engineers extends React.Component {
  state = {
    engineers: [],
    engineer:{},
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/getEngineers")
      .then((response) => {
        console.log(response);
        this.setState({ engineers: response.data });
      })
      .catch((error) => console.log(error));
  }
  handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/removeEngineer/${id}`)
      .then((res) => {
        const engineers = this.state.engineers.filter(
          (eng) => eng.employeeId != id
        );
        this.setState({ engineers: engineers });
      });
  };
  render() {
    return (
      <div className="container">
        
          { <Link
          to="/addEngineers"
          className="btn btn-primary btn-large mb-3 float-end" >
          Add
        </Link> } 

        
        <table className="table">
          <thead>
            <tr>
              <th>Engineer Name</th>
              <th>Engineer Id</th>
              <th>Email Id</th>
              <th>Password</th>
              <th>Domain</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.engineers.map((engineer) => (
              <tr>
                <td>{engineer.engineerName}</td>
                <td>{engineer.employeeId}</td>
                <td>{engineer.email}</td>
                <td>{engineer.password}</td>

                <td>{engineer.domain}</td>
                

                <td>
                  <Link to={`/engineers/update/${engineer.employeeId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(engineer.employeeId)}
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

export default Engineers;