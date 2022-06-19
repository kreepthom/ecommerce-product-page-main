import React from 'react'

import { Box } from '@mui/material'
import ContentText from './ContentText';
import ContentImage from './ContentImage';
import ModalImages from './ModalImages';

import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    Content:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

const Content = () => {

    const Class = useStyles()

  return (
    <Box className={Class.Content}>
        <ContentImage/>
        <ContentText/>
        <ModalImages/>

    </Box>
  )
}

export default Content