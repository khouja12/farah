import React, { useState } from "react";
import "./SignIn.css";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Navs from "../../components/NavBars/Navs";
import Footer from "../../components/Footer/Footer";

function SignIn() {
  return (
    <div>
      <Navs />
      <div className="SignIn">
        <Typography
          gutterBottom
          variant="h3"
          color={"white"}
          marginTop={"1rem"}
          align="center"
        >
          inscription{" "}
        </Typography>
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Enter first name"
                      label=" Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      required
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="password"
                      type="password"
                      placeholder="Type your password here"
                      variant="outlined"
                      fullWidth
                      required
                      name="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      {"submit "}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
      <Footer/>
    </div>
  );
}

export default SignIn;
