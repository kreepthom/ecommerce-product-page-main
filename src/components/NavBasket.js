import React, { useContext } from 'react'

import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SvgIcon from '@mui/material/SvgIcon';
import { useShopContext } from '../hook/useContext'

import { NavBarStyles } from './NavBarStyle';

const NavBasket = () => {

    const { numShop, numImage } = useContext(useShopContext)
    const Class = NavBarStyles()

    return (
        <div className={Class.NavBasket}>

            <h4 className={Class.tiltleBasket}>cart</h4>

            <div className={Class.DivBasket}>

                {numShop === 0 ?

                    (<div className={Class.divEmpty}>

                        <h4 className={Class.titleEmpty}> cart is empty</h4>

                    </div>)
                    :

                    <div className={Class.DivBasket}>

                        <img className={Class.imageBasket} src={`images/image-product-${numImage}-thumbnail.jpg`} alt="" />

                        <div className={Class.DivIcon}>

                            <Typography className={Class.textBasket}>
                                fall limited edition sneakers
                                $125.00 x {numShop}

                                <span className={Class.PriceBasket}>${eval(`125.00 * ${numShop}`)}</span>

                            </Typography>

                            <SvgIcon className={Class.iconBasket} component={DeleteOutlineIcon} />

                        </div>
                    </div>
                }

            </div>

            <Button className={Class.Checkout}>
                checkout
            </Button>

        </div>
    )
}

export default NavBasket