import React from 'react'

import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import ButtomText from './ButtomText'

import { ContentTextStyle } from './ContentTextStyle'




const ContentText = () => {

    const Class = ContentTextStyle()

    return (
        <div className={Class.divContentBox}>
            <Box className={Class.BoxContentText} sx={{ width: '100%' }}>

                <Typography
                    className={Class.TypOverLine}
                    variant='overline'
                >
                    sneakers company
                </Typography>

                <Typography
                    className={Class.TypTitle}
                    variant='h4'>
                    fall limited edition sneakers
                </Typography>

                <Typography
                    className={Class.TypParagraph}
                    variant='body1'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they'll withstand everything the weather can offer.
                </Typography>

                <div className={Class.ConttPrice}>
                    <Typography
                        className={Class.TypPrice}
                        variant='h6'>
                        $125.00
                        <small className={Class.TypPrice2}>50%</small>
                    </Typography>

                    <small className={Class.Small}>
                        $250.00
                    </small>

                </div>


                <ButtomText />


            </Box>


        </div>


    )
}

export default ContentText
