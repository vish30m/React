import React, { Component } from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { spacing } from "@mui/system";
//import { blueGrey } from "@material-ui/core/colors";
class Home extends React.Component {
  render() {
    const commonStyles = {
      bgcolor: "background.paper",
      borderColor: "text.primary",
      m: 1,
      border: 1,
      width: "5rem",
      height: "5rem",
    };
    return (
      <Box>
        <CardContent>
          <Typography
            style={{ fontSize: 40 }}
            color="textSuccess"
            gutterBottom
            variant="h1"
          >
            ABC Complaint Portal
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            style={{
              color: "black",
            }}
          >
            If you are having problems with ABC and would like to either find
            out your rights, whom to contact or make a complaint then use
            Resolver to make the process simpler. Connect via Resolver India's
            free online portal.
          </Typography>
          <CardActions>
            <Button
              className="mx-auto"
              size="large"
              style={{ textAlign: "center", marginTop: 30 }}
            >
              {
                <Link
                  to="/register"
                  className="btn btn-outline-secondary btn-large  float-start "
                >
                  Get Started
                </Link>
              }
            </Button>
          </CardActions>
          <Card
            className="mx-auto"
            style={{
              height: 90,
              width: 1000,
              marginLeft: 50,
              backgroundColor: "lightpink",
              marginTop: 30,
            }}
          >
            {
              <Link
                to="/complaints/add"
                className="btn btn-outline-secondary btn-large  float-center ms-4 mt-4 "
              >
                BookComplaint
              </Link>
            }

            {
              <Link
                to="/complaints/clientAllComplaints"
                className="btn btn-outline-secondary btn-large  float-center  ms-5 mt-4"
              >
                ClientAllComplaints
              </Link>
            }

            {
              <Link
                to="/complaints/clientAllOpenComplaints"
                className="btn btn-outline-secondary btn-large  float-center ms-5 mt-4"
              >
                ClientAllOpenComplaint
              </Link>
            }
          </Card>

          <Typography
            style={{
              marginBottom: 12,
              color: "grey",
              marginTop: 30,
            }}
            variant="h4"
          >
            <i>
              Resolver is not affiliated to, linked with or otherwise endorsed
              by ABC.
            </i>
          </Typography>
          <Typography variant="body2" component="p">
            We are an entirely independent issue-resolution tool that enables
            the raising and handling of consumer issues, making complaining
            simpler for everyone.
          </Typography>
        </CardContent>
      </Box>
    );
  }
}

export default Home;
