import { useState,useContext } from 'react';

import { ButtonGroup } from '@mui/material'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {useShopContext} from '../hook/useContext' 

import {ContentTextStyle} from './ContentTextStyle'


const ButtomText = () => {

    const Class = ContentTextStyle()
    const {setNumShop} = useContext(useShopContext)
    const [plusSubs, setPlusSubs] = useState(0)

    const handleNumPlus = () => {
        
        setPlusSubs(n => n + 1 )
    }
    const handleNumSubs = () => {

        if(plusSubs !== 0){
            setPlusSubs(n => n - 1 )
        }
    }


  return (
    <ButtonGroup sx={{boxShadow:'none !important', marginTop:'20px !important'}} variant='contained' are-label='buttonGroup contained'>

    <IconButton onClick={handleNumSubs} size='small' className={Class.AddIcon}>
        <HorizontalRuleIcon fontSize='small' />
    </IconButton>

    <Button className={Class.SpanNum}
        sx={{
        }}> {plusSubs}
    </Button>
    <IconButton onClick={handleNumPlus} size='small' className={Class.SubsIcon}>

        <AddIcon fontSize='small' />
    </IconButton>
    <Button 
        onClick={()=>setNumShop(n => n + 1)}
        sx={{ width: '60%' }} 
        className={Class.CartAdd}
        variant='contained' 
        startIcon={<ShoppingCartOutlinedIcon />}
        >
        add to cart
    </Button>
</ButtonGroup>
  )
}

export default ButtomText