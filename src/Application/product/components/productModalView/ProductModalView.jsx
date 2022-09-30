import { Image } from 'cloudinary-react';

import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Container, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


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
                <Box className='container_ProductModalView'>

                    <GlobalStyles styles={{
                        body: {
                            overflowY: 'hidden'
                        }
                    }} />

                    <div id='imagesIndexContainer'>
                        <div id='imagesIndex'>

                            <Typography fontSize={18} variant="body2">
                                {`${(imageSelected !== null) ? (imageSelected.i + 1) : 1} / ${img.length}`}
                            </Typography>

                        </div>
                    </div>

                    <IconButton
                        id='buttonIcon'
                        onClick={handleCloseModal}
                    >
                        <CloseIcon id='closeIcon' />
                    </IconButton>

                    <div id='productImageContainer'>
                        <Image
                            id='productImage'
                            cloudName="the-kings-company"
                            publicId={(imageSelected !== null) ? imageSelected.img : img[0].imageUrl}
                            alt='Product'
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        />
                    </div>

                    <div id='arrowButtonsContainer'>

                        <IconButton
                            id='arrowLeftIconButton'
                            onClick={handleLeft}
                        >
                            <ArrowLeftIcon id='arrowLeftIcon' />
                        </IconButton>

                        <IconButton
                            id='arrowRightIconButton'
                            onClick={handleRight}
                        >
                            <ArrowRightIcon id='arrowRightIcon' />
                        </IconButton>

                    </div>

                </Box>
            </Container>
        </Modal>
    );
};