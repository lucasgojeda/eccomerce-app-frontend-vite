/** Libraries */
import React, { useState } from 'react'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { styled } from "@mui/material/styles";
import { Button, Typography } from '@mui/material';
import { useAuthStore } from '../../../hooks';
import { DataUserModal } from '../components/DataUserModal';
import { SuccessUpdateAlert } from '../components/SuccessUpdateAlert';
import { DialogData } from '../components/DialogData';
import { Footer } from '../../ui';

/** Material UI - Custom components */
const AccountPageContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "80vh",
  marginTop: '12.5vh',
  marginBottom: '12.5vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
}));

const FirstContainer = styled("div")(({ theme }) => ({
  width: "95%",
  height: "40vh",
  display: 'flex',
  flexDirection: 'row',
  borderRadius: '30px',
  backgroundColor: theme.palette.primary.light,
  zIndex: 1000,
  [theme.breakpoints.down("sm")]: {
    height: "60vh",
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    flexDirection: 'column',
    zIndex: 100,
    backgroundColor: 'white'
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiAvatar-root': {
    width: '15ch',
    height: '15ch',
    objectFit: 'cover'
  },
}));

const NameEmailContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2.5vh'
}));

const FontContainer = styled('div')(({ theme }) => ({
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const FontTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  fontStyle: 'italic',
  color: theme.palette.gray.light,
}));

const Font = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
  [theme.breakpoints.down("sm")]: {
    color: theme.palette.black.main,
  },
}));

const SecondContainer = styled("div")(({ theme }) => ({
  width: "95%",
  height: "40vh",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5vh',
  borderRadius: '30px',
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.down("sm")]: {
    height: "30vh",
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    marginTop: 0,
    zIndex: 100,
    backgroundColor: 'white'
  },
}));

const EditButtonContainer = styled("div")(({ theme }) => ({
  position: 'absolute',
  width: "95%",
  height: "40vh",
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'end',
  borderRadius: '30px',
  paddingTop: '15px',
  paddingRight: '30px',
  // backgroundColor: 'red',
  [theme.breakpoints.down("sm")]: {
    height: "30vh",
    width: "100%",
    marginTop: 0,
    borderRadius: 0,
    paddingTop: 0,
    paddingRight: 0,
    border: 'none',
    marginTop: '-15px',
    marginRight: '30px',
  },
}));

const DirectionContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "40vh",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2vh'
}));

const ContactContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "40vh",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2vh'
}));


export const AccountPage = () => {

  const { name, email, data } = useAuthStore();

  const [modalStatus, setModalStatus] = useState(false);
  const [dialogDataStatus, setDialogDataStatus] = useState(!data);
  const [alertStatus, setAlertStatus] = useState(false);

  return (
    <>
      <AccountPageContainer>
        <DataUserModal
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          setAlertStatus={setAlertStatus}
        />
        <DialogData
          dialogDataStatus={dialogDataStatus}
          setDialogDataStatus={setDialogDataStatus}
          setAlertStatus={setAlertStatus}
        />
        <SuccessUpdateAlert
          alertStatus={alertStatus}
          setAlertStatus={setAlertStatus}
        />
        <FirstContainer>
          <ImageContainer>
            <Stack direction="row">
              <Avatar alt="Lucas Ojeda" src="https://res.cloudinary.com/the-kings-company/image/upload/v1671396595/user-ecommerce/Avatar-Profile-PNG-Free-Image_yeonm0.png" />
            </Stack>
          </ImageContainer>
          <NameEmailContainer>
            <FontContainer>
              <FontTitle variant='subtitle1'>Name</FontTitle>
              <Font variant='body1'>{name}</Font>
            </FontContainer>
            <FontContainer>
              <FontTitle variant='subtitle1'>Email</FontTitle>
              <Font variant='body1'>{email}</Font>
            </FontContainer>
          </NameEmailContainer>
        </FirstContainer>
        <SecondContainer>
          <EditButtonContainer>
            <Button variant='contained' color='secondary' onClick={() => setModalStatus(true)}>
              Edit
            </Button>
          </EditButtonContainer>
          <DirectionContainer>
            <FontContainer>
              <FontTitle variant='subtitle1'>State</FontTitle>
              <Font variant='body1'>{(!!data) ? data.state : '(vacío)'}</Font>
            </FontContainer>
            <FontContainer>
              <FontTitle variant='subtitle1'>City</FontTitle>
              <Font variant='body1'>{(!!data) ? data.city : '(vacío)'}</Font>
            </FontContainer>
            <FontContainer>
              <FontTitle variant='subtitle1'>Address</FontTitle>
              <Font variant='body1'>{(!!data) ? data.address : '(vacío)'}</Font>
            </FontContainer>
          </DirectionContainer>
          <ContactContainer>
            <FontContainer>
              <FontTitle variant='subtitle1'>Postal code</FontTitle>
              <Font variant='body1'>{(!!data) ? data.postalCode : '(vacío)'}</Font>
            </FontContainer>
            <FontContainer>
              <FontTitle variant='subtitle1'>Number phone</FontTitle>
              <Font variant='body1'>{(!!data) ? data.numberPhone : '(vacío)'}</Font>
            </FontContainer>
          </ContactContainer>
        </SecondContainer>
      </AccountPageContainer>
      <Footer />
    </>
  )
}
