import { makeStyles } from '@mui/styles'; 

const DrawerNavStyles = makeStyles(theme => ({

    container: {
        width: '250px',
        
        [theme.breakpoints.only('sm')]:{
            
            width: '300px',
        },

        // [theme.breakpoints.theme.only('md')]:{
        //     display:'none'
        // },

        // [theme.breakpoints.theme.only('lg')]:{
        //     display:'none'
        // },

    },

    CloseIcon: {
        height: '60px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        '&:hover': {
            transition:'.5s',
            color: 'hsl(26, 100%, 55%) !important'
        },
    },
    itemDrawer: {
        transition:'.2s',
        color: '#000',
        cursor:'pointer',
        textTransform: 'capitalize',
        fontSize: '10px !important',
        
        '&:hover': {
            transition:'.5s',
            color: 'hsl(25, 100%, 65%) !important'
        },
    }

}))

export default DrawerNavStyles