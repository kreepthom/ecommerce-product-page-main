import React, { useState,useContext } from 'react'

import { Box } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import ModalImages from './ModalImages';
import SvgIcon from '@mui/material/SvgIcon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


import { useContentImagesStyles } from './contentImageStyle'
import {useShopContext} from '../hook/useContext'

const ContentImage = () => {

    const Class = useContentImagesStyles()
    const NumImage = [1, 2, 3, 4];

    const {numImage, setNumImage} = useContext(useShopContext)
    const [openModal, setOpenModal] = useState(false)

    const handleImageMain = (Num) => {
        setNumImage(Num)
    }

    const handleModal = () => {
        setOpenModal(true)
    }

    return (
        <Box
            className={Class.ContainerMain}
            color="text.primary"
        >

            <div className={Class.ContainerImage}>
                <div className={Class.DivImage}>
                    
                    <SvgIcon 
                        onClick={'handleModalBack'}
                        className={Class.BackIcon} 
                        component={ChevronLeftIcon}
                     />
                    <SvgIcon 
                        onClick={'handleModalNext'}  
                        className={Class.NextIcon} 
                        component={ChevronRightIcon} 
                    />
                    <img 
                        onDoubleClick={handleModal} 
                        className={Class.ImageMain} 
                        src={`/images/image-product-${numImage}.jpg`} 
                        alt="Shoes" 
                    />

                </div>

    

                <Box 
                    className={Class.ContImgThumb} 
                    component='div'
                >
                    {
                        NumImage.map(Num => (
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
            <ModalImages
                openModal={openModal} 
                setOpenModal={setOpenModal} 
            />
        </Box>
    );
}

export default ContentImage