import React from 'react'
import Base from '../Base/Base'
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Auth = () => {

  const history = useHistory();

  // handle sign in button click
  const handleSignIn = () => {
    history.push("/dashboard");
  };

  return (
    <Base
      title={"Please login or register"}
      description={"Authentication page"}
    >
      <div className="container authpage">
        <Container component="main" maxWidth="lg">
          <Box
            sx={{
              marginTop: 8,
            }}
          >
            <Grid container>
              <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1523461811963-7f1023caeddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
              >
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <TextField margin="normal" fullWidth label="Email Address" />
                    <TextField
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={handleSignIn} // add onClick handler to call handleSignIn function
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <br />
      <br />
      <br></br>
    </Base>
  );
};

export default Auth;
