/** Libraries */
import React from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";

import { useFormik } from "formik";

import { GoogleLogin } from '@react-oauth/google';

import HomeIcon from "@mui/icons-material/Home";

import { useGoogleOneTapLogin } from '@react-oauth/google';

/** Custom hooks */
import { useAuthStore } from "../../../../hooks";

/** Helpers */
import { YupLoginValidations } from "../../../../helpers";

/** Material UI - Custom components */
const LoginContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  minHeight: "650px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SecondContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    marginTop: '10vh',
  },
}));

const HomeIconContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  minHeight: "5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  "& .MuiSvgIcon-root": {
    fontSize: "25px",
    color: "#707B7C",
    cursor: "pointer",
    marginLeft: "1.5vw",
    marginTop: "3.5vh",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiSvgIcon-root": {
      fontSize: "30px",
      marginLeft: "2vw",
      marginTop: "1.5vh",
    },
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "35vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: 1,
  [theme.breakpoints.down("sm")]: {
    minHeight: "30vh",
    mb: 0,
  },
}));

const Image = styled("img")(({ theme }) => ({
  maxWidth: "30ch",
  objectFit: "cover",
  objectPosition: "20% 10%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "70%",
    maxHeight: "25ch",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  mb: 2,
  mt: 1,
  backgroundColor: "#2AE3C8",
  ":hover": {
    backgroundColor: "#00DFC0",
  },
}));

export const LoginPage = () => {
  const navigate = useNavigate();

  const { StartLogin, startGoogleLogin } = useAuthStore();

  /** Google oauth */
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      startGoogleLogin(credentialResponse.credential);
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "homelander@gmail.com",
      password: "1234567",
    },

    validationSchema: YupLoginValidations,
    onSubmit: async (values, { resetForm }) => {
      StartLogin(values);
      resetForm();
    },
  });

  const handleGoogleLogin = (response) => {
    const { credential } = response;

    if (credential) return startGoogleLogin(credential);
  };

  return (
    <LoginContainer>
      <SecondContainer>
        <HomeIconContainer>
          <Tooltip title="Home" arrow>
            <HomeIcon onClick={() => navigate("/")} />
          </Tooltip>
        </HomeIconContainer>
        <ImageContainer>
          <Image
            src="https://res.cloudinary.com/the-kings-company/image/upload/v1668874026/user-ecommerce/login-register/online-shop-ecommerce-svgrepo-com_siy5pd.svg"
            alt=""
          />
        </ImageContainer>
        <Box
          component="form"
          sx={{ mt: 3, width: "90%" }}
          onSubmit={formik.handleSubmit}
        >
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Grid item sx={{ width: { xs: "100%", sm: "50%", md: "30%" } }}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item sx={{ width: { xs: "100%", sm: "50%", md: "30%" } }}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LoginButton
                type="submit"
                fullWidth
                variant="contained"
                size="large"
              >
                Login
              </LoginButton>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" mt={3}>
            <Grid item>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                useOneTap
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" mt={3}>
            <Grid item>
              <Link as={LinkRouter} to="/register" variant="body2">
                <Typography variant="p" color="#1976D2">
                  You do not have an account?
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </SecondContainer>
    </LoginContainer>
  );
};
