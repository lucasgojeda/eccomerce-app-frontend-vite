/** Libraries */
import React from "react";

import {
    Button,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { useFormik } from "formik";

import { styled } from "@mui/material/styles";

/** Custom hooks */
import { useAuthStore } from "../../../hooks";

/** Helpers */
import { YupUserDataValidations } from "../../../helpers";

/** Material UI - Custom components */
const FormContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
}));

const Form = styled("form")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: 'none',
    width: "60vw",
    minWidth: '575px',
    [theme.breakpoints.down("sm")]: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: '100vh',
        minWidth: '0',
        borderRadius: '0px',
        minHeight: '800px',
    },
}));

const TitleContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10vh",
    [theme.breakpoints.down("sm")]: {
        height: "15vh",
        minHeight: '150px',
    },
}));

const FontTitle = styled(Typography)(({ theme }) => ({
    fontSize: "17px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "17.5px",
    },
}));

const FieldsContainer = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    '& .MuiTextField-root': {
        width: '24ch',
    },
    [theme.breakpoints.down("sm")]: {
        gap: '0px',
        minHeight: '350px',
        justifyContent: "space-between",
        '& .MuiTextField-root': {
            width: '70%',
        },
    },
}));

const SecondFieldsContainer = styled('div')(({ theme }) => ({
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
        height: "20vh",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        gap: '0px',
        minHeight: '175px',
    }
}));

const ButtonsContainer = styled('div')(({ theme }) => ({
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
        height: "20vh",
        alignItems: "start",
    },
}));

export const DataUserModal = ({ modalStatus, setModalStatus, setAlertStatus }) => {

    const { data, startUpdateUser, uid, role, name } = useAuthStore();

    const formik = useFormik({
        initialValues: {
            state: (data) ? data.state : '',
            city: (data) ? data.city : '',
            postalCode: (data) ? data.postalCode : '',
            address: (data) ? data.address : '',
            numberPhone: (data) ? data.numberPhone : '',
        },

        validationSchema: YupUserDataValidations,
        onSubmit: (values, { resetForm }) => {
            try {


                if (!!data) {
                    if (values.state === data.state
                        && values.city === data.city
                        && values.postalCode === data.postalCode
                        && values.address === data.address
                        && values.numberPhone === data.numberPhone) return setModalStatus(false);
                }

                startUpdateUser({
                    _id: uid,
                    name,
                    role,
                    data: {
                        ...values,
                    },
                }, setAlertStatus);

                setModalStatus(false);
            } catch (error) {
                console.log(error);
            }
            resetForm();
        },
    });

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const md = useMediaQuery(theme.breakpoints.down("md"));
    const xl = useMediaQuery(theme.breakpoints.down("xl"));
    const lg = useMediaQuery(theme.breakpoints.down("lg"));

    const handleClose = () => {
        setModalStatus(false);
    };

    return (
        <Box minWidth="100vh">
            <Modal
                open={modalStatus}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FormContainer>
                    <Form
                        noValidate
                        autoComplete="off"
                        onSubmit={formik.handleSubmit}
                    >
                        <TitleContainer>
                            <FontTitle color="GrayText" variant="body2">
                                Datos del usuario
                            </FontTitle>
                        </TitleContainer>

                        <FieldsContainer>
                            <SecondFieldsContainer>
                                <TextField
                                    required
                                    id="outlined-required"
                                    type="text"
                                    variant="outlined"
                                    label="Provincia"
                                    name="state"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    error={formik.touched.state && Boolean(formik.errors.state)}
                                    helperText={formik.touched.state && formik.errors.state}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    type="text"
                                    variant="outlined"
                                    label="Ciudad"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                    helperText={formik.touched.city && formik.errors.city}
                                />
                            </SecondFieldsContainer>

                            <SecondFieldsContainer>
                                <TextField
                                    required
                                    id="outlined-required"
                                    type="text"
                                    variant="outlined"
                                    label="Codigo postal"
                                    name="postalCode"
                                    value={formik.values.postalCode}
                                    onChange={formik.handleChange}
                                    error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                                    helperText={formik.touched.postalCode && formik.errors.postalCode}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    type="text"
                                    variant="outlined"
                                    label="Dirección"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                />
                            </SecondFieldsContainer>

                            <SecondFieldsContainer>
                                <TextField
                                    required
                                    id="outlined-required"
                                    type="text"
                                    variant="outlined"
                                    label="N° Telefonico"
                                    name="numberPhone"
                                    value={formik.values.numberPhone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.numberPhone && Boolean(formik.errors.numberPhone)}
                                    helperText={formik.touched.numberPhone && formik.errors.numberPhone}
                                />
                            </SecondFieldsContainer>
                        </FieldsContainer>

                        <ButtonsContainer>
                            <Button variant="outlined" onClick={handleClose}>
                                Cerrar
                            </Button>

                            <Button type="submit" variant="contained">
                                Guardar
                            </Button>
                        </ButtonsContainer>
                    </Form>
                </FormContainer>
            </Modal>
        </Box>
    );
};
