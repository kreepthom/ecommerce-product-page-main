import React, { useState } from 'react'

import { Box } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import ModalImages from './ModalImages';

import {useContentImagesStyles} from './contentImageStyle'

const ContentImage = () => {

    const Class = useContentImagesStyles()
    const NumImage = [1, 2, 3, 4];

    const [numImage, setNumImage] = useState(1)
    const [openModal, setOpenModal] = useState(false)

    const handleImageMain = (Num) => {
        setNumImage(Num)
    }

    const handleModal = ()=>{
        setOpenModal(true)
    }

    return (
        <Box className={Class.ContainerMain} color="text.primary">

            <div className={Class.ContainerImage}>

                <img onDoubleClick={handleModal} className={Class.ImageMain} src={`/images/image-product-${numImage}.jpg`} alt="Shoes" />

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
            <ModalImages openModal={openModal} setOpenModal={setOpenModal}/>
        </Box>
    );
}

export default ContentImage