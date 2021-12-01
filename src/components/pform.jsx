import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import Joi from "joi-browser";
//import Alert from "@mui/material/Alert";
const ariaLabel = { "aria-label": "description" };
const Pform = (props) => {
  const [user, setUser] = useState({
    modelNumber: "",
    productCategoryName: "",
    productName: "",
    warrantyYears: "",
    dateofPurchase: "",
    warrantyDate: "",
  });
  const [errors, setErrors] = useState({
    modelNumber: "",
    productCategoryName: "",
    productName: "",
    warrantyYears: "",
    dateofPurchase: "",
    warrantyDate: "",
  });
  const [errMsg, setErrMsg] = useState(" ");
  const schema = {
    modelNumber: Joi.string().required(),
    productCategoryName: Joi.string().required(),
    productName: Joi.string().required(),
    warrantyYears: Joi.number().required(),
    dateofPurchase: Joi.string().required(),
    warrantyDate: Joi.string().required(),
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
    //console.log(user);
    event.preventDefault();
    console.log("HandleSubmit");
    setErrors(validate());
    console.log(errors);
    if (errors) {
      return;
    }
    console.log(user);

    axios
      .post("http://localhost:8080/api/addProduct", user)
      .then((res) => props.history.push("/products"))
      .catch((err) => {
        console.log(err.response);
        setErrMsg(err.response);
      });
    // alert("Complaint is booked");
  };

  return (
    <div>
      <Typography variant="h4">Product Form</Typography>
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
                type="modelNumber"
                variant="outlined"
                fullWidth
                label="ModelNumber"
                value={user.modelNumber}
                name="modelNumber"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.modelNumber}</Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="productCategoryName"
                variant="outlined"
                fullWidth
                label="ProductCategoryName"
                value={user.productCategoryName}
                name="productCategoryName"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">
                  {errors.productCategoryName}
                </Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="productName"
                variant="outlined"
                fullWidth
                label="ProductName"
                value={user.productName}
                name="productName"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.productName}</Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="warrantyYears"
                variant="outlined"
                fullWidth
                label="WarrantyYears"
                value={user.warrantyYears}
                name="warrantyYears"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">
                  {errors.warrantyYears}
                </Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="dateofPurchase"
                variant="outlined"
                fullWidth
                label="DateofPurchase"
                value={user.dateofPurchase}
                name="dateofPurchase"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">
                  {errors.dateofPurchase}
                </Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="warrantyDate"
                variant="outlined"
                fullWidth
                label="WarrantyDate"
                value={user.warrantyDate}
                name="warrantyDate"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.warrantyDate}</Typography>
              )}
            </Box>
            <Box mt={3}>
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};
export default Pform;
