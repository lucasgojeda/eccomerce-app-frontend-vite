/** Libraries */
import { Image } from 'cloudinary-react';

import Modal from '@mui/material/Modal';
import { Container, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import CloseIcon from '@mui/icons-material/Close';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

/** Material UI - Custom components */
const ProductModalViewContainer = styled("div")(({ theme }) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 110,
}));

const ImagesIndexContainer = styled("div")(({ theme }) => ({
    position: 'absolute',
    left: '2%',
    top: '3%',
    width: '25%',
}));

const ImagesIndex = styled("div")(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'none',
    color: theme.palette.white.main,
    fontSize: '24px',
    width: '10vh',
    height: '5vh',
    borderRadius: '20px',
    zIndex: 100,
}));

const CloseIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    padding: '2.5px',
    top: '1%',
    right: '1%',
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    zIndex: 1000,
    ':hover': {
        backgroundColor: 'rgba(333, 333, 333, 0.1)',
    },
    '.MuiSvgIcon-root': {
        color: theme.palette.white.light,
        fontSize: '40px',
        padding: '10px',

        ':hover': {
            borderRadius: '30px',
        }
    },
}));

const ProductImageContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: 'auto',
    marginBottom: '12.5%',
}));

const ProductImage = styled(Image)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    height: '45ch',
    objectFit: 'contain',
    img: {
        width: '100%',
        height: 'auto',
    },
}));

const ArrowButtonsContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    height: 'auto',
    left: 0,
    top: '45%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down("sm")]: {
        top: '85%',
    },
}));

const ArrowLeftIconButton = styled(IconButton)(({ theme }) => ({
    ':hover': {
        backgroundColor: 'rgba(333, 333, 333, 0.1)',
    },
    '.MuiSvgIcon-root': {
        color: theme.palette.white.light,
        fontSize: '70px',
    },
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
    },
}));

const ArrowRightIconButton = styled(IconButton)(({ theme }) => ({
    ':hover': {
        backgroundColor: 'rgba(333, 333, 333, 0.1)',
    },
    '.MuiSvgIcon-root': {
        color: theme.palette.white.light,
        fontSize: '70px',
    },
    [theme.breakpoints.down("sm")]: {
        marginRight: 0,
    },
}));


export const ProductModalView = ({ modalViewOpen,
    setModalViewOpen,
    imageSelected,
    img,
    handleTouchStart,
    handleTouchEnd,
    setImageSelected }) => {

    const handleRight = () => {

        if (imageSelected !== null) {

            img.forEach((image, index) => index === (((imageSelected.i + 1) >= img.length) ? 0 : (imageSelected.i + 1)) && setImageSelected({
                i: index,
                img: image.imageUrl
            }));

        }
        else {

            img.forEach((image, index) => index === 1 && setImageSelected({
                i: index,
                img: image.imageUrl
            }));
        }
    }

    const handleLeft = () => {

        if (imageSelected !== null) {

            img.forEach((image, index) => index === ((imageSelected.i <= 0) ? (img.length - 1) : (imageSelected.i - 1)) && setImageSelected({
                i: index,
                img: image.imageUrl
            }));

        }
        else {

            img.forEach((image, index) => index === (img.length - 1) && setImageSelected({
                i: index,
                img: image.imageUrl
            }));
        }
    }

    const handleCloseModal = () => {

        setModalViewOpen(false);

    }

    return (
        <Modal
            open={modalViewOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Container maxWidth="sm">
                <ProductModalViewContainer>

                    <ImagesIndexContainer>
                        <ImagesIndex>

                            <Typography fontSize={18} variant="body2">
                                {`${(imageSelected !== null) ? (imageSelected.i + 1) : 1} / ${img.length}`}
                            </Typography>

                        </ImagesIndex>
                    </ImagesIndexContainer>

                    <CloseIconButton onClick={handleCloseModal}>
                        <CloseIcon />
                    </CloseIconButton>

                    <ProductImageContainer>
                        <ProductImage
                            cloudName="the-kings-company"
                            publicId={(imageSelected !== null) ? imageSelected.img : img[0].imageUrl}
                            alt='Product'
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        />
                    </ProductImageContainer>

                    <ArrowButtonsContainer>

                        <ArrowLeftIconButton onClick={handleLeft}>
                            <ArrowLeftIcon />
                        </ArrowLeftIconButton>

                        <ArrowRightIconButton onClick={handleRight}>
                            <ArrowRightIcon />
                        </ArrowRightIconButton>

                    </ArrowButtonsContainer>

                </ProductModalViewContainer>
            </Container>
        </Modal>
    );
};