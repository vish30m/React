import { Typography } from "@mui/material";
import React, { Component } from "react";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h4" align="center">
          Contact Us
        </Typography>

        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto border p-3 mt-3"
          style={{ borderColor: "lightskyblue" }}
        >
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Fullname
            </label>
            <input type="text" required className="form-control" />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input required type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Comment
            </label>
            <input
              type="text"
              required
              className="form-control"
              style={{ height: 100 }}
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary" to="/home">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
