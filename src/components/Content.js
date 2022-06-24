import React from 'react'

import { Box } from '@mui/material'
import ContentText from './ContentText';
import ContentImage from './ContentImage';
import ModalImages from './ModalImages';

import {makeStyles} from '@mui/styles'

const useStyles = makeStyles( theme=>({
    Content:{
      
      display:'flex',
      justifyContent:'center',
      alignItems:'center',

        [theme.breakpoints.down('md')]:{
          // width:'100%',
          // background:'grey',
          display:'block'
        }
    }
}))

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