/** Libraries */
import React from "react";
import { Link as LinkRouter } from "react-router-dom";

import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";

import { GoogleLogin } from "react-google-login";

/** Custom hooks */
import { useAuthStore } from "../../../../hooks";

/** Helpers */
import { YupLoginValidations } from "../../../../helpers";

export const LoginPage = () => {
  const { StartLogin, startGoogleLogin } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email: "user_test@test.com",
      password: "1234567",
    },

    validationSchema: YupLoginValidations,
    onSubmit: async (values, { resetForm }) => {
      StartLogin(values);
      resetForm();
    },
  });

  const handleGoogleLogin = (response) => {
    const { tokenId } = response;

    if(tokenId) return startGoogleLogin(tokenId);
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Box
          width="100%"
          minHeight="40vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            "& img": {
              maxWidth: "30ch",
              objectFit: "cover",
              objectPosition: "20% 10%",
            },
            mb: 1,
          }}
        >
          <img
            src="https://res.cloudinary.com/the-kings-company/image/upload/v1668874026/user-ecommerce/login-register/online-shop-ecommerce-svgrepo-com_siy5pd.svg"
            alt=""
          />
        </Box>
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
                // required

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
                // required
                fullWidth
                name="password"
                label="Contraseña"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mb: 2,
                  mt: 1,
                  backgroundColor: "#2AE3C8",
                  ":hover": {
                    backgroundColor: "#00DFC0",
                  },
                }}
              >
                Ingresar
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            sx={{
              "& .google-button": {
                display: "block",
                margin: "auto",
                marginTop: "2.5vh",
                height: "7vh",
                minWidth: "200px",
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
              },
              "& .google-button__icon": {
                display: "inline-block",
                verticalAlign: "middle",
                margin: "0px 0 8px 8px",
                marginTop: "5px",
                width: "18px",
                height: "18px",
                boxSizing: "border-box",
              },
            }}
          >
            <Grid item>
              <GoogleLogin
                clientId="263099325228-55asn431srakct5pegne7a7go6hjctq6.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    className="google-button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Ingresar con Google
                    <img
                      className="google-button__icon"
                      alt="google_logo"
                      src="https://res.cloudinary.com/the-kings-company/image/upload/v1668874652/user-ecommerce/login-register/google_logo_wnezxw.png"
                    />
                  </button>
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
              <Link as={LinkRouter} to="/register" variant="body2">
                <Typography variant="p" color="#1976D2">
                  No tienes una cuenta?
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
