import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { GoogleLogin } from 'react-google-login';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { Button, Divider, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {
    startGoogleLogin,
    StartLogin,
    startRegister
} from '../../../store/thunks/auth';

import { useForm } from '../../../hooks/useForm';

import { styles__register } from '../../../styles/Application/auth/styles__register';

import google_logo from '../../../assets/google_logo.png';


export const RegisterScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName: '',
        rEmail: '',
        rPassword: ''

    });
    const { rName, rEmail, rPassword } = formRegisterValues;

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleRegister = (e) => {
        e.preventDefault();

        dispatch(startRegister(rName, rEmail, rPassword));

    }

    const handleModLogin = (e) => {
        e.preventDefault();

        dispatch(StartLogin('moderator_test@test.com', '1234567'));

    }
    const handleUserLogin = (e) => {
        e.preventDefault();

        dispatch(StartLogin('user_test@test.com', '1234567'));

    }
    const handleAdminLogin = (e) => {
        e.preventDefault();

        dispatch(StartLogin('admin_test@test.com', '123456'));

    }

    const handleGoogleLogin = (response) => {

        const { tokenId } = response;

        dispatch(startGoogleLogin(tokenId));
    }


    return (

        <Container sx={styles__register(sm, md, lg, xl)}
            maxWidth="sm">
            <IconButton
                id='buttonHome'
                size="large"
                edge="start"
                aria-label="home"
                onClick={() => navigate('/?page=1')}
            >
                <HomeIcon />
            </IconButton>
            <Box
                id='loginContainer'
                component="form"
                noValidate
                autoComplete="off"
            >

                <Typography fontSize={20} id='title' variant="body2" color="text.primary">
                    Crear nueva cuenta
                </Typography>


                <Container id='container'>

                    <div>
                        <TextField
                            required
                            id='name'
                            variant='outlined'
                            label="Nombre"
                            name='rName'
                            value={rName}
                            onChange={handleRegisterInputChange}
                        />

                        <TextField
                            required
                            variant='outlined'
                            label="Email"
                            name='rEmail'
                            value={rEmail}
                            onChange={handleRegisterInputChange}
                        />

                        <TextField
                            required
                            variant='outlined'
                            label="Contraseña"
                            name='rPassword'
                            value={rPassword}
                            onChange={handleRegisterInputChange}
                        />

                    </div>
                </Container>

                <div id='registerButtonContainer'>
                    <Container>
                        <Button
                            type="submit"
                            id="submitButton"
                            variant="outlined"
                            onClick={handleRegister}
                        >Registrarse</Button>
                    </Container>
                </div>

                <div id='loginButtonContainer'>
                    <GoogleLogin
                        clientId="263099325228-55asn431srakct5pegne7a7go6hjctq6.apps.googleusercontent.com"
                        render={renderProps => (
                            <button className='google-button' onClick={renderProps.onClick} disabled={renderProps.disabled}>Ingresar con Google<img className='google-button__icon' alt='google_logo' src={google_logo} /></button>
                        )}
                        buttonText="Login"
                        onSuccess={handleGoogleLogin}
                        onFailure={handleGoogleLogin}
                        cookiePolicy={'single_host_origin'}
                    />

                    <Link className='Link' to="/login"> Ya tienes una cuenta ? - Ingresar </Link>
                </div>

            </Box>
            <Container id='fastLoginRoles'>
                <h1>Ingreso rapido (demostración de roles)</h1>
                <Button className='button' id="user" onClick={handleUserLogin}>usuario</Button>
                <Button className='button' id="moderator" onClick={handleModLogin}>moderador</Button>
                <Button className='button' id="admin" onClick={handleAdminLogin}>admin</Button>
            </Container>
        </Container>

    );
};