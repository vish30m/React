import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Tooltip,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import Joi from "joi-browser";
import Alert from "@mui/material/Alert";
const ariaLabel = { "aria-label": "description" };
const Cform = (props) => {
  const [user, setUser] = useState({
    //complaintId:"",
    productModelNumber: "",
    complaintName: "",
    status: "",
    clientId: "",
    engineerId: "0",
  });
  const [errors, setErrors] = useState({
    //complaintId:"",
    productModelNumber: "",
    complaintName: "",
    status: "",
    clientId: "",
    engineerId: "0",
  });
  const [errMsg, setErrMsg] = useState(" ");
  const schema = {
    // complaintId:Joi.string().required(),
    productModelNumber: Joi.string().required(),
    complaintName: Joi.string().required(),
    status: Joi.string().required(),
    clientId: Joi.string().required(),
    engineerId: Joi.string().required(),
  };
  const validate = () => {
    const errors = {};
    const result = Joi.validate(user, schema, { abortEarly: false });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  // Capture user input and update state object
  const handleChange = (event) => {
    console.log("HandleChange");
    const usr = { ...user };
    usr[event.target.name] = event.target.value;
    //this.setState({ user: user });
    setUser(usr);
  };
  const handleSubmit = (event) => {
    // Prevent default behaviour of submit button
    console.log(user);
    event.preventDefault();
    console.log("Handle submit");
    // const users= {

    //     clientId: user.clientId,
    //      //complaintId: user.complaintId,
    //     complaintName: user.complaintName,
    //     engineerId: user.engineerId,
    //     productModelNumber: user.productModelNumber,
    //     status: user.status

    // }

    setErrors(validate());
    console.log(errors);
    if (errors) {
      return;
    }
    axios
      .post("http://localhost:8080/api/Complaints", user)
      .then((res) => props.history.push("/complaint"))
      .catch((err) => {
        console.log(err.response);
        setErrMsg(err.response);
      });
    alert("Complaint is booked");
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Typography variant="h4">BookComplaint</Typography>
      <Grid container>
        <Grid item xs={6} style={{ marginLeft: "auto", marginRight: "auto" }}>
          {/* {errMsg && <Alert severity="error">{errMsg}</Alert>} */}

          <form
            noValidate
            onSubmit={handleSubmit}
            style={{
              border: "1px solid blue",
              padding: "20px",
              marginTop: "10px",
            }}
          >
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                fullWidth
                variant="filled"
                required
                label="ProductModelNumber"
                value={user.productModelNumber}
                name="productModelNumber"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">
                  {errors.productModelNumber}
                </Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                fullWidth
                variant="filled"
                label="ComplaintName"
                required
                value={user.complaintName}
                name="complaintName"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">
                  {errors.complaintName}
                </Typography>
              )}
            </Box>

            <Box mb={3}>
              <FormControl variant="filled" fullWidth required>
                <InputLabel id="demo-simple-select-outlined-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleChange}
                  name="status"
                  value={user.status}
                  label="Status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="open">Open</MenuItem>
                  <MenuItem value="customer">Close</MenuItem>
                  <MenuItem value="resolve online">Resolve Online</MenuItem>
                  <MenuItem value="resolved after homevisit">
                    Resolve after homevisit
                  </MenuItem>
                  <MenuItem value="resolved">Resolved</MenuItem>
                </Select>
              </FormControl>
              {errors && (
                <Typography variant="caption">{errors.status}</Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                fullWidth
                variant="filled"
                label="ClientId"
                required
                value={user.clientId}
                name="clientId"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.clientId}</Typography>
              )}
            </Box>
            {/* <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                fullWidth
                variant="filled"
                label="EngineerId"
                required
                value={user.engineerId}
                name="engineerId"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.engineerId}</Typography>
              )}
            </Box> */}
            <Box mb={3}>
              <Tooltip
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                title="click submit to book complaint"
              >
                <Button variant="contained" type="submit" fullWidth>
                  Submit
                </Button>
              </Tooltip>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cform;
