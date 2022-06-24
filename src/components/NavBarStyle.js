
import { makeStyles } from '@mui/styles';
import { textAlign } from '@mui/system';

export const NavBarStyles = makeStyles(theme =>
({

    BarCont: {

        display: 'flex',
        justifyContent: 'center',
        height: '90px',
        background: 'white !important',
        boxShadow: 'none !important',

        [theme.breakpoints.only('xs')]: {

            height: '60px',
        }
    },

    ToolBar: {

        width: '880px',
        margin: 'auto',
        padding: '0px !important',
        borderBottom: '1px solid rgba(0,0,0,.1)',
        height: '90px',

        [theme.breakpoints.only('xs')]: {

            borderBottom: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '70px',
        },

        [theme.breakpoints.only('sm')]: {

            borderBottom: '0px',
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%'
        },
    },

    DivLogoMenu: {

        width: '190px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    IconMenu: {

        cursor: 'pointer',
        marginTop: '5px',
        padding: '2px ',
        fontSize: '30px !important',
        color: 'rgba(0,0,0,.6)',

        '&:hover': {

            transition: '.5s',
            borderRadius: '10px',
            background: 'rgba(0,0,0,.1) !important',
            color: 'hsl(25,100%,55%)'
        },

        [theme.breakpoints.up('md')]: {

            display: 'none !important',
        },
    },

    NavLogo: {

        height: '18px ',

        [theme.breakpoints.down('md')]: {

            height: '20px ',
        },
    },

    TabsNav: {

        color: 'grey',
        marginLeft: '30px',
        display: 'flex',
        flexGrow: '1',

        [theme.breakpoints.down('md')]: {

            display: 'none !important',
        },
    },

    TabNav: {

        textTransform: 'capitalize !important',
        fontSize: '12px',
        fontWeight: '500',
    },
    Badge: {
        position: 'relative',
        width: '20px',
        height: '20px',
    },

    IconNav: {

        color: 'rgba(0,0,0,.5) ',
        cursor: 'pointer',
        fontSize: '20px !important',
        position: 'absolute',
        top: '1px',
        left: '1px',

        '&:hover': {

            background: 'transparent',
            transition: '.5s',
            color: 'black',
        },

        [theme.breakpoints.down('sm')]: {

            fontSize: '30px !important',
        }
    },



    avatar: {

        border: '2px solid transparent',

        '&:hover': {

            transition: '.5s',
            border: '2px solid hsl(25,100%,55%)',
        },

        [theme.breakpoints.down('sm')]: {

            width: '30px !important',
            height: '30px !important'
        }
    },

    DivAva: {

        padding: '0px !important',
        width: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },


    // BASKET

    NavBasket: {

        borderRadius: '5px',
        transition: '.5s',
        width: '300px',
        height: '180px',
        background: 'white',
        position: 'absolute',
        top: '40px',
        left: '-150px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0px 10px 20px rgba(0,0,0,.3)'

    },

    tiltleBasket: {

        textTransform: 'capitalize',
        fontSize:'15px',
        fontWeight:'600 ',
        color: 'black',
        width: '96%',
        paddingLeft: '40px',
        paddingBottom: '10px',
        borderBottom: '1px solid rgba(0,0,0,.1)',
        display: 'flex',
        alignItems: 'start',
        
        '&:hover':{
            transition: '.5s',
            color: 'hsl(26, 100%, 55%) !important',

        }

    },

    DivBasket: {

        display: 'flex',
        gap: '10px'

    },
    DivIcon: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageBasket: {


        borderRadius: '5px',
        marginLeft: '10px',
        Widht: '40px ',
        height: '40px',

    },

    textBasket: {

        color: 'black',
        width: '180px',
        textTransform: 'capitalize',
        fontSize: '.8rem !important'
    },

    PriceBasket: {

        marginLeft: '10px',
        fontWeight: '800',
        color: 'black'
    },

    iconBasket: {
        color: 'rgba(0,0,0,.4)',
        fontSize: '10px',

        '&:hover':{
            transition: '.5s',
            color: 'hsl(26, 100%, 55%) !important',

        }
    },

    Checkout: {

        textTransform: 'capitalize !important',
        color:'white !important',
        fontWeight:'600 !important',
        marginTop: '20px !important',
        width: '250px ',
        background: 'hsl(26, 100%, 55%) !important',

        '&:hover':{
            background: 'hsl(25, 100%, 65%) !important',

        }

    },
})
)