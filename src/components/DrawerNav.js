
import { useState, useContext } from 'react';


import Drawer from '@mui/material/Drawer';
import {List} from '@mui/material';
import {ListItem} from '@mui/material';
import {ListItemText} from '@mui/material';
import {ListItemIcon} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useShopContext } from '../hook/useContext'
import DrawerNavStyles from './DrawerNavStyles'


const DrawerNav = () => {

    const { openDrawwer, setOpenDrawwer } = useContext(useShopContext)
    const [selected, setSelected] = useState(5)
    
    
    const Class = DrawerNavStyles()

    const handleOpenDrawer = () => {
        setOpenDrawwer(false)
    }

    const handleSelected = (selected) => {
       setSelected(selected)
       
    }

    return (
        <Drawer anchor={'left'} open={openDrawwer} >
            <List className={Class.container}>
                <ListItem  >
                    <ListItemIcon onClick={handleOpenDrawer} className={Class.CloseIcon} >
                        <CloseIcon />
                    </ListItemIcon>
                </ListItem>
                <ListItem selected={selected === 1} className={Class.itemDrawer} >
                    <ListItemText onClick={ () => handleSelected(1)} primary='collections' />
                </ListItem>
                <ListItem selected={selected === 2} className={Class.itemDrawer} >
                    <ListItemText onClick={() => handleSelected(2)} primary='men' />
                </ListItem>
                <ListItem selected={selected === 3} className={Class.itemDrawer} >
                    <ListItemText onClick={() => handleSelected(3)} primary='women' />
                </ListItem >
                <ListItem selected={selected === 4} className={Class.itemDrawer} >
                    <ListItemText onClick={() => handleSelected(4)} primary='about' />
                </ListItem>
                <ListItem selected={selected === 5} className={Class.itemDrawer} >
                    <ListItemText onClick={() => handleSelected(5)} primary='contact' />
                </ListItem>
            </List>

        </Drawer>

    )
}

export default DrawerNav