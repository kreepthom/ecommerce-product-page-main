import { makeStyles } from "@mui/styles";

export const useModalStyles = makeStyles(theme => ({
    ContainerMain: {

        width: '100% !important',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none !important',
        position: 'relative',
        top: '50%',
        left: '50%',
        background:'rgba(0,0,0,.5)',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        border: '0px solid #000',
        p: 4,

        [theme.breakpoints.only('xs')]:{

            display:'none',
        }
    },

    ContainerImage: {

        paddingTop: '90px',
        width: '400px',
        height:'360px',
        height: '80vh',
        border: '30px solid transparent'
    },

    DivImage:{

        position:'relative',
        display:'flex',
        flexDirection:'column',
        justifySelf:'start',
        alignSelf:'flex-end'
    },

    ImageMain: {

        width: '400px',
        height: '360px',
        borderRadius: '12px ',
        marginBottom: '10px',
    },

    ContImgThumb: {
      
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginTop: '0px',
        padding: '10px 0px',
    },

    ImageThumbnail: {
        
        cursor: 'pointer',
        width: '70px !important',
        height: '70px',
        borderRadius: '10px ',
        border: '2px solid transparent',

        '&:hover': {

            border: '2px solid hsl(26, 100%, 55%)',
            backgroundColor: 'black',
        },
    },

    CloseIcon: {

        position:'absolute',
        top:'-30px',
        right:'-5px',
        cursor:'pointer',
        display: 'flex',
        justifySelf: 'center',
        alignSelf: 'center',
        color: 'white',

        '&:hover':{

            color:'hsl(26, 100%, 65%) !important'
        },
    },

    BackIcon:{
        
        position:'absolute',
        top:'160px',
        left:'-20px',
        cursor:'pointer',
        color: 'rgba(0,0,0,.6)',
        background:'white',
        padding:'8px',
        borderRadius:'50%',

        '&:hover':{

            color:'hsl(26, 100%, 65%) !important'
        },
    },
    
    NextIcon:{
        
        position:'absolute',
        top:'160px',
        right:'-20px',
        cursor:'pointer',
        color: 'rgba(0,0,0,.6)',
        padding:'8px',
        background:'white',
        borderRadius:'50%',

        '&:hover':{

            color:'hsl(26, 100%, 65%) !important'
        },
    },
}))