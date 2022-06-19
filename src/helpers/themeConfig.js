import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    typography:{
        fontFamily:'Kumbh Sans, sans-serif'

    },
    palette:{
        primary:{
            main:'#000'
        },
        info:{
            main:'hsl(26, 100%, 55%)',
        },
        Badge:{
            main:'hsl(26, 100%, 55%)',
        }
        // error:{
        //     light:'hsl(26, 100%, 55%)',
        //     // main:'hsl(26, 100%, 55%)'
        // }
    }
})