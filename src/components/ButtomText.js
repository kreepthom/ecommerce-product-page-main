
import {ContentTextStyle} from './ContentTextStyle'

import { ButtonGroup } from '@mui/material'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ButtomText = () => {

    const Class = ContentTextStyle()

  return (
    <ButtonGroup sx={{boxShadow:'none !important'}} variant='contained' are-label='buttonGroup contained'>
    <IconButton size='small' className={Class.AddIcon}>
        <HorizontalRuleIcon fontSize='small' />
    </IconButton>

    <Button className={Class.SpanNum}
        sx={{
        }}> 0
    </Button>
    <IconButton size='small' className={Class.SubsIcon}>

        <AddIcon fontSize='small' />
    </IconButton>
    <Button sx={{ width: '60%' }} className={Class.CartAdd} variant='contained' startIcon={<ShoppingCartOutlinedIcon />}>
        add to cart
    </Button>
</ButtonGroup>
  )
}

export default ButtomText