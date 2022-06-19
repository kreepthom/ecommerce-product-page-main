import React, { useState } from 'react'

import { Box } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Modal from '@mui/material/Modal';
import SvgIcon from '@mui/material/SvgIcon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

import {useModalStyles} from './ModalImagesStyle'

const ModalImages = ({openModal = false,setOpenModal}) => {


    const Class = useModalStyles()
    const NumImage = [1, 2, 3, 4];

    const [numImage, setNumImage] = useState(1)
    
    const handleImageMain = (Num) => {
        setNumImage(Num)
    }

    const handleModalNext = () =>{
        setNumImage(numImage+1)
        if(numImage === 4){
            setNumImage(1)
        }
    }
    
    const handleModalBack = ()=>{
        setNumImage(numImage-1)
        if(numImage === (1)){
            setNumImage(4)
        }
    }
    const handleClose = ()=>{
        setOpenModal(false)
    }
    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={Class.ContainerMain} color="text.primary">


                <div className={Class.ContainerImage}>
                    <div className={Class.DivImage}>
                        <SvgIcon onClick={handleClose} className={Class.CloseIcon} component={CloseIcon} />
                        <SvgIcon onClick={handleModalBack} className={Class.BackIcon} component={ChevronLeftIcon} />
                        <SvgIcon onClick={handleModalNext} className={Class.NextIcon} component={ChevronRightIcon} />
                        <img className={Class.ImageMain} src={`/images/image-product-${numImage}.jpg`} alt="Shoes" >
                    </img>

                    </div>

                    <Box className={Class.ContImgThumb} component='div'>
                        {
                            NumImage.map(Num => (

                                // <img
                                //     onClick={() => handleImageMain(Num)}
                                //     className={Class.ImageThumbnail}
                                //     key={Num}
                                //     src={`images/image-product-${Num}-thumbnail.jpg`}
                                //     alt="Shoes"
                                // />
                                <CardMedia
                                    onClick={() => handleImageMain(Num)}
                                    key={Num}
                                    className={Class.ImageThumbnail}
                                    component="img"
                                    height="70"
                                    image={`images/image-product-${Num}-thumbnail.jpg`}
                                    alt="Shoes"
                                />

                            )
                            )
                        }
                    </Box>
                </div>
            </Box>

        </Modal>
    )
}

export default ModalImages