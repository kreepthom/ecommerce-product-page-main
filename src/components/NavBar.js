import React, { useState } from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar } from '@mui/material';

import { NavBarStyles } from './NavBarStyle';

// TODO: falta quitar los padding de los componentes <Tab/>

const ProductsNavBar = () => {

    const Class = NavBarStyles()

    const [valueTabs, setValueTabs] = useState('one')

    const handleChangeTabs = (e, SetValue) => {

        setValueTabs(SetValue)
    }


    return (

        <Box className={Class.boxNav}
            sx={{ width: '100%', position:'fixed'}}
        >
            <img
                className='NavLogo'
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
            <SvgIcon
                className={Class.IconNav}
                component={ShoppingCartOutlinedIcon}
                inheritViewBox />

            <Avatar
                className={Class.avatar}
                src='/images/image-avatar.png'
                alt='aPerson' />

        </Box>

    )
}

export default ProductsNavBar