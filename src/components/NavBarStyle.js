
import { makeStyles } from '@mui/styles';

export const NavBarStyles = makeStyles(theme =>
({
    boxNav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.5s',
        background:'white',
        
    },
    NavLogo: {

    },
    TabsNav: {
        color: 'grey',
        marginLeft: '20px',
        display: 'flex',
        flexGrow: '.8',

    },

    TabNav: {
        textTransform: 'capitalize !important',
        fontSize: '12px',
        fontWeight: '500',

    },
    IconNav: {
        color: '#B8B8B8 ',
        padding: '5px',
        marginRight: '30px',
        cursor: 'pointer',
        '&:hover': {

            transition: '.5s',
            color: '#585858',

        }
    },
    avatar: {


    },

})
)