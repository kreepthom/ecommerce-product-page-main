
import { makeStyles } from '@mui/styles';

export const NavBarStyles = makeStyles(theme =>
({
    boxNav: {
        
        transition: '0.5s',
        background:'white',
        borderBottom:'1px solid black'
        
    },
    BarCont:{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'space-evenly',
        height:'90px',
        background:'white !important',
        boxShadow:'none !important',
        position:'relative',
        '&:before':{
            position:'absolute',
            content:'""',
            top:'0',
            left:'230px',
            height:'90px',
            width:'66.5vw',
            background:'',
            borderBottom:'1px solid rgba(0,0,0,.1)'
        },
        // border:'1px solid red'
    },
    ToolBar:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    NavLogo: {
        height:'18px '
    },
    TabsNav: {
        color: 'grey',
        marginLeft: '30px',
        display: 'flex',
        flexGrow: '.3',

    },

    TabNav: {
        textTransform: 'capitalize !important',
        fontSize: '12px',
        fontWeight: '500',

    },
    IconNav: {
        color: '#B8B8B8 ',
        cursor: 'pointer',
        '&:hover': {
            
            transition: '.5s',
            color: '#585858',
            
        }
    },
    Badge:{
        marginTop:'10px',
        marginRight: '30px',
        color:'white !important'

    },
    DivAva: {
        display:'flex',

    },
    

})
)