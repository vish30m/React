import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class EngineerList extends React.Component {
  state = {
    engineers: [],
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
  handleDelete = (engineerId) => {
    axios
      .delete(`http://localhost:8080/removeEngineer/${engineerId}`)
      .then((res) => {
        const eng = this.state.engineers.filter(
          (eng) => eng.employeeId != engineerId
        );
        this.setState({ engineer: eng });
      });
  };
  render() {
    return (
      <div className="container">
        {/* {
          <Link
            className="mb-3"
            to="/addEngineers"
            className=" mt-3 btn btn-primary btn-large mb-2 float-end"
          >
            Add
          </Link>
        } */}

        <table className="table table-striped border border-5 border-dark mx-auto mt-5">
          <thead>
            <tr>
              <th>Engineer Name</th>
              <th>Engineer Id</th>
              <th>Domain</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.engineers.map((engineer) => (
              <tr>
                <td>{engineer.engineerName}</td>
                <td>{engineer.employeeId}</td>
                <td>{engineer.domain}</td>
                {/* <td>
                  <Link to={`/engineers/update/${engineer.employeeId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary mt-2"
                    />
                  </Link>

                  <Link to="/engineer">
                    <input
                      type="button"
                      value="delete"
                      className="btn btn-danger mt-2"
                      onClick={() => this.handleDelete(engineer.employeeId)}
                    />
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        { <Link
          to="/idsearch"
          className="btn btn-secondary btn-large mb-3  float-center" >
          Search By Id
        </Link> } 
        { <Link
          to="/statussearch"
          className="btn btn-secondary btn-large mb-3 ms-5 float-center" >
          Search By Status
        </Link> } 
         
      </div>
    );
  }
}

export default EngineerList;