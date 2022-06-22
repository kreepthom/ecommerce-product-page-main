import React, { useState,useContext } from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Avatar } from '@mui/material';

import {useShopContext} from '../hook/useContext'

import { NavBarStyles } from './NavBarStyle';

// TODO: falta quitar los padding de los componentes <Tab/>

const ProductsNavBar = () => {

    const Class = NavBarStyles()
    const {numShop,setNumShop} = useContext(useShopContext)
    console.log(numShop)
    const [valueTabs, setValueTabs] = useState('one')

    const handleChangeTabs = (e, SetValue) => {

        setValueTabs(SetValue)
    }

    return (

        <Box className={Class.boxNav}
            sx={{
                width: '100%'
                // , position: 'fixed' 
            }}
        >
            <AppBar className={Class.BarCont} position="fixed">
                <Toolbar className={Class.ToolBar}>


                    <img
                        className={Class.NavLogo}
                        src="/images/logo.svg"
                        alt="Sneakers"
                    />
                    <Tabs

                        className={Class.TabsNav}
                        value={valueTabs}
                        onChange={handleChangeTabs}
                        textColor='inherit'
                        indicatorColor='primary'


                    >
                        <Tab className={Class.TabNav} value='one' label="Collections" />
                        <Tab className={Class.TabNav} value='two' label="Men" />
                        <Tab className={Class.TabNav} value='three' label="Women" />
                        <Tab className={Class.TabNav} value="four" label="About" />
                        <Tab className={Class.TabNav} value="five" label="Contact" />



                    </Tabs>
                    <div className={Class.DivAva}>

                        <Badge color='Badge' className={Class.Badge} badgeContent={numShop} >
                            <SvgIcon
                                className={Class.IconNav}
                                component={ShoppingCartOutlinedIcon}
                                inheritViewBox
                            />
                        </Badge>

                        <Avatar
                            className={Class.avatar}
                            src='/images/image-avatar.png'
                            alt='aPerson' />
                    </div>

                </Toolbar>
            </AppBar>



        </Box>

    )
}

export default ProductsNavBar