
import { makeStyles } from '@mui/styles';

export const ContentTextStyle = makeStyles(theme =>({
    divContentBox: {
   
        width: '40vw ',
        height: '97vh',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        fontFamily: 'Kumbh Sans, sans-serif',

        [theme.breakpoints.only('sm')]:{

            height: '80vh',
            width:'100% ',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },

        [theme.breakpoints.only('xs')]:{

            height: '80vh',
            width:'100%',
            isplay: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
        
    },

    BoxContentText: {

        width: '350px !important',
        display: 'grid',
        gridTemplateColumns: '1fr',
        paddingTop: '50px',
        padding: '0px',
        marginLeft:'50px',
        
        [theme.breakpoints.only('sm')]:{
            
            marginLeft:'0px',
            width: '500px !important',
            paddingTop: '30px ',
        },

        [theme.breakpoints.only('xs')]:{

            marginLeft:'0px',
            width:'100%',
            paddingTop: '30px ',
        }
    },

    TypOverLine: {

        padding: '10px 0px',
        fontWeight: '800 !important',
        color: 'hsl(26, 100%, 55%)',
    },

    TypTitle: {

        fontWeight: '700 !important',
        fontSize:'1.8rem !important',
        textTransform: 'capitalize',
        padding: '0px 0px 10px',

        [theme.breakpoints.only('sm')]:{

            fontSize:'2.2rem !important',
            padding: '0px 0px 20px',
        },

    },

    TypParagraph: {

        padding: '0px 0px 10px',
        fontSize: '.8rem !important',
        color: 'rgba(0,0,0,.6)',

        [theme.breakpoints.only('sm')]:{

            // interlineado
            fontSize:'1rem !important',
            padding: '0px 0px 20px',

        },
    },

    ConttPrice:{

        [theme.breakpoints.only('sm')]:{

           display:'flex',
           justifyContent:'center',
           alignItems:'center'
        },

        [theme.breakpoints.only('xs')]:{

           display:'flex',
           justifyContent:'center',
           alignItems:'center'
        },

    },

    TypPrice: {
       
        fontWeight: '600 !important',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',

        [theme.breakpoints.only('sm')]:{
            flexGrow:'.9'
        },

        [theme.breakpoints.only('xs')]:{
            flexGrow:'.9'
        },
    },

    TypPrice2: {

        fontFamily: 'Kumbh Sans, sans-serif',
        fontSize: '12px',
        fontWeight: '400 !important',
        background: 'hsl(25, 100%, 94%)',
        margin: ' 0px 0px 0px 10px',
        color: 'hsl(26, 100%, 55%)',
        padding: '0px 2px',
        borderRadius: '3px',
    },

    Small: {
        
        color: 'rgba(0,0,0,.4)',
        marginBottom: '10px !important',
        textDecoration: 'line-through',
        fontWeight: '800 !important',
       
        [theme.breakpoints.only('sm')]:{
            fontSize: '20px',
            marginTop:'5px ',
        },
        
        [theme.breakpoints.only('xs')]:{
            fontSize: '20px',
            marginTop:'8px ',
        }
    },

    // BUTTOMTEXT

    ContButton:{

        [theme.breakpoints.only('sm')]:{

            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
         },

        [theme.breakpoints.only('xs')]:{

            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
         },
    },
   
    
    
    AddIcon: {

        color: 'hsl(26, 100%, 55%) !important',
        background: 'rgba(0,0,0,.04) !important',
        borderRadius: '10px 0px 0px 10px !important',

        '&:hover':{

            color:'hsl(26, 100%, 65%) !important'
        },

        [theme.breakpoints.only('sm')]:{

            width:'30px',
            height:'37px',
            marginBottom:'10px !important'
         },

        [theme.breakpoints.only('xs')]:{

            width:'30px',
            height:'37px',
            marginBottom:'10px !important'
         },
    },

    SpanNum: {
       
      
        backgroundColor: 'rgba(0,0,0,.04) !important',
        color: 'black !important',
        fontWeight: '600 !important',
        border: 'none !important',

        '&:hover':{

            color:'rgba(0,0,0,.7) !important'
         },

        [theme.breakpoints.only('sm')]:{

            width:'250px',
            marginBottom:'10px !important'
        },

        [theme.breakpoints.only('xs')]:{

            width:'250px',
            marginBottom:'10px !important'
        },
    },

    SubsIcon: {

        color: 'hsl(26, 100%, 55%) !important',
        background: 'rgba(0,0,0,.04) !important',
        borderRadius: '0px 10px 10px 0px !important',

        '&:hover':{

           color:'hsl(26, 100%, 65%) !important'
        },

        [theme.breakpoints.only('sm')]:{

            width:'30px',
            height:'37px',
            marginBottom:'10px !important'
        },

        [theme.breakpoints.only('xs')]:{

            width:'30px',
            height:'37px',
            marginBottom:'10px !important'
        },
    },
    CartAdd: {

        color: 'hsl(25, 100%, 94%) !important',
        borderRadius: '10px !important',
        marginLeft: '12px !important',
        backgroundColor: 'hsl(26, 100%, 55%) !important',
        textTransform: 'capitalize !important',

        '&:hover':{

            transition:'.5s',
            backgroundColor: 'hsl(26, 100%, 65%) !important',
        },
        
        [theme.breakpoints.only('sm')]:{

            marginLeft: '0px !important',
            width:'310px',
           
        },

        [theme.breakpoints.only('xs')]:{
            
            marginLeft: '0px !important',
            width:'310px !important',
        },
    }
}))