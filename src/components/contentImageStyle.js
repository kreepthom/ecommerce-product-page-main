import { makeStyles } from "@mui/styles";

export const useContentImagesStyles = makeStyles(theme => ({

    ContainerMain: {

        [theme.breakpoints.only('lg')]: {

            paddingTop: '40px',
            width: '40vw !important',
            height: '90vh !important',
            display: 'flex !important',
            justifyContent: 'flex-end !important',
        },

        [theme.breakpoints.only('md')]: {

            width: '40vw !important',
            height: '90vh !important',
            display: 'flex !important',
            justifyContent: 'flex-end !important',
        },

        [theme.breakpoints.only('sm')]: {

            width: '100%',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },

        [theme.breakpoints.only('xs')]: {

            paddingTop: '50px',
            width: '100%',
            background: 'orange !important',
            height: '300px !important',
        },

    },
    ContainerImage: {

        [theme.breakpoints.only('lg')]: {

            paddingTop: '70px',
            width: '400px !important',
            height: '500px !important',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },

        [theme.breakpoints.only('md')]: {

            paddingTop: '50px',
            width: '400px !important',
            height: '500px !important',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },

        [theme.breakpoints.only('sm')]: {

            marginTop: '120px',
            width: '90% ',
            height: '400px !important',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },

        [theme.breakpoints.only('xs')]: {

            width: '100%',
            height: '100px !important',
        },

    },
    DivImage: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px',
        // border:'1px solid black',

        [theme.breakpoints.only('md')]: {

            height: '300px',
            width: '100%',
            position: 'relative',
        },

        [theme.breakpoints.only('sm')]: {
            width: '500px',
            height: '350px',
            position: 'relative'
        },

        [theme.breakpoints.only('xs')]: {

            width: '100%',
            height: '300px',
            background: 'red ',
            marginBottom: '0px',
        },

    },
    ImageMain: {

        borderRadius: '12px ',
        width: '350px',
        height: '300px',
        cursor: 'pointer',


        [theme.breakpoints.only('md')]: {

            borderRadius: '12px',
            height: '100%',
            marginRight: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '0px',
        },

        [theme.breakpoints.only('sm')]: {

            width: '500px',
            height: '350px',
            borderRadius: '12px ',
        },

        [theme.breakpoints.only('xs')]: {

            height: '300px',
            width: '100%',
            borderRadius: '0px',
        }

    },
    ContImgThumb: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginTop: '0px',
        padding: '10px 0px',

        [theme.breakpoints.down('md')]: {

            display: 'none'
        }
    },
    ImageThumbnail: {

        cursor: 'pointer',
        width: '19%',
        borderRadius: '10px ',
        border: '2px solid transparent',

        '&:hover': {

            border: '2px solid hsl(26, 100%, 55%)',
            backgroundColor: 'black',
        },


    },

    BackIcon: {

        display: 'none !important',
        position: 'absolute',
        top: '40%',
        left: ' 20px',
        cursor: 'pointer',
        color: 'rgba(0,0,0,.9)',
        background: 'white',
        padding: '8px',
        borderRadius: '50%',

        '&:hover': {
            color: 'hsl(26, 100%, 55%) !important',

        },

        [theme.breakpoints.down('md')]: {

            display: 'block !important',
        },

        [theme.breakpoints.only('sm')]: {

            background: '#fff',
            border: '2px solid transparent',
            top: '50% !important',
            left: '-20px',
            padding: '10px',

            '&:hover': {
                transition: '.3s',
                border: '2px solid hsl(26, 100%, 70%)',
                opacity: '.95'
            }
        },
        [theme.breakpoints.only('xs')]: {
            top: '35% !important'
        }
    },
    NextIcon: {

        display: 'none !important',
        position: 'absolute',
        top: '40%',
        right: '20px',
        cursor: 'pointer',
        color: 'rgba(0,0,0,.9)',
        padding: '8px',
        background: '#fff',
        borderRadius: '50%',

        '&:hover': {
    
            color: 'hsl(26, 100%, 55%) !important',
        },

        [theme.breakpoints.down('md')]: {

            display: 'block !important',
        },

        [theme.breakpoints.only('sm')]: {

            background: '#fff',
            border: '2px solid transparent',
            top: '50% !important',
            right: '-20px',
            padding: '10px',
            '&:hover': {
                transition: '.3s',
                border: '2px solid hsl(26, 100%, 70%)',
                opacity: '.95'
            }
        },
        [theme.breakpoints.only('xs')]: {
            top: '35% !important'
        }
    },
}))