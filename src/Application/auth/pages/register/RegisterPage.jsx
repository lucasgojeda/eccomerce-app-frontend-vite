/** Libraries */
import React from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";

import { useFormik } from "formik";

import { GoogleLogin } from "react-google-login";

import HomeIcon from "@mui/icons-material/Home";

/** Custom hooks */
import { useAuthStore } from "../../../../hooks";

/** Helpers */
import { YupRegisterValidations } from "../../../../helpers";

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
  minHeight: "40vh",
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

const RegisterButton = styled(Button)(({ theme }) => ({
  mt: 2,
  mb: 1,
  backgroundColor: "#2AE3C8",
  ":hover": {
    backgroundColor: "#00DFC0",
  },
}));

const GoogleButton = styled(GoogleLogin)(({ theme }) => ({
  display: "block",
  margin: "auto",
  marginTop: "2.5vh",
  height: "7vh",
  minWidth: "150px",
  minHeight: "60px",
  backgroundColor: "#fff",
  color: "#737373",
  borderWidth: 0,
  borderRadius: "2px",
  whiteSpace: "nowrap",
  boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.25)",
  transitionProperty: "background-color box-shadow",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease-in-out",
  padding: 0,
  transform: "scale(1.4)",
  ":hover": {
    boxShadow: "1px 4px 5px 1px rgba(0,0,0,0.2)",
    outline: "none",
    transform: "scale(1.4) skewX(-0.4deg)",
    cursor: "pointer",
  },
  ":active": {
    outline: "none",
    boxShadow: "1px 4px 5px 1px rgba(0,0,0,0.3)",
    transitionDuration: "10ms",
  },
}));

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { StartRegister, startGoogleLogin } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: YupRegisterValidations,
    onSubmit: async (values, { resetForm }) => {
      StartRegister(values);
      resetForm();
    },
  });

  const handleGoogleLogin = (response) => {
    const { tokenId } = response;

    if (tokenId) return startGoogleLogin(tokenId);
  };

  return (
    <LoginContainer>
      <SecondContainer>
        <HomeIconContainer>
          <Tooltip title="Ir al inicio" arrow>
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
          sx={{ mt: 1, width: "90%" }}
          onSubmit={formik.handleSubmit}
        >
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <Grid item sx={{ width: { xs: "100%", sm: "50%", md: "30%" } }}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Nombre"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item sx={{ width: { xs: "100%", sm: "50%", md: "30%" } }}>
              <TextField
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
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
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RegisterButton type="submit" fullWidth variant="contained">
                Registrarse
              </RegisterButton>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <GoogleLogin
                clientId="263099325228-55asn431srakct5pegne7a7go6hjctq6.apps.googleusercontent.com"
                render={(renderProps) => (
                  <GoogleButton
                    className="google-button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Ingresar con Google
                  </GoogleButton>
                )}
                buttonText="Login"
                onSuccess={handleGoogleLogin}
                onFailure={handleGoogleLogin}
                cookiePolicy={"single_host_origin"}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" mt={3}>
            <Grid item>
              <Link as={LinkRouter} to="/login" variant="body2">
                <Typography variant="p" color="#1976D2">
                  Ya tienes una cuenta?
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </SecondContainer>
    </LoginContainer>
  );
};
