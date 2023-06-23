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
                      placeholder="nom "
                      label=" Nom"
                      variant="outlined"
                      fullWidth
                      required
                      name="Nom"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      placeholder="Enter email"
                      label="Departement "
                      variant="outlined"
                      fullWidth
                      required
                      name="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="Email"
                      placeholder="Email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      name="Email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Mot De Passe"
                      type="password"
                      placeholder="Mot De Passe"
                      variant="outlined"
                      fullWidth
                      required
                      name="Mot De Passe"
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
