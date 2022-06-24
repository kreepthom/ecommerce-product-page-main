import React, { useState, useContext } from 'react'


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuIcon from '@mui/icons-material/Menu';
import SvgIcon from '@mui/material/SvgIcon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Avatar } from '@mui/material';
import NavBasket from './NavBasket';

import { useShopContext } from '../hook/useContext'

import { NavBarStyles } from './NavBarStyle';

// TODO: falta quitar los padding de los componentes <Tab/>

const ProductsNavBar = () => {

    const Class = NavBarStyles()
    const { numShop } = useContext(useShopContext)
    const [valueTabs, setValueTabs] = useState('one')
    const [ handleBasket, setHandleNavBasket] = useState(false)

    const handleChangeTabs = (e, SetValue) => {

        setValueTabs(SetValue)
    }

    const handleNavBasket = ()=>{
        setHandleNavBasket(!handleBasket)
    }

    return (


        <AppBar className={Class.BarCont} position="fixed">

            <Toolbar className={Class.ToolBar}>
                <div className={Class.DivLogoMenu}>
                    {/* <IconButton className={Class.IconMenu}>
                        <MenuIcon />
                    </IconButton> */}
                    <SvgIcon
                        className={Class.IconMenu}
                        component={MenuIcon}
                        inheritViewBox
                    />

                    <img
                        className={Class.NavLogo}
                        src="/images/logo.svg"
                        alt="Sneakers"
                    />
                </div>
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

                    <Badge variant='dostandard' color='Badge' className={Class.Badge} badgeContent={numShop} >
                        <SvgIcon
                            onClick={handleNavBasket}
                            className={Class.IconNav}
                            component={ShoppingCartOutlinedIcon}
                            inheritViewBox
                        >
                        </SvgIcon>

                        { handleBasket && <NavBasket/>}
                    </Badge>

                    <Avatar
                        className={Class.avatar}
                        src='/images/image-avatar.png'
                        alt='aPerson' />
                </div>

            </Toolbar>
        </AppBar>



    )
}

export default ProductsNavBar