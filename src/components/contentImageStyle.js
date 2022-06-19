import { makeStyles } from "@mui/styles";

export const useContentImagesStyles = makeStyles({
    ContainerMain: {

        width: '40vw',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        flexDirection: 'column',
        marginTop: '38px',
       
    },
    ContainerImage: {

        paddingTop: '90px',
        width: '350px ',
        height:'550px',
        marginRight: '48px',

    },
    ImageMain: {

        width: '100%',
        height: '70%',
        borderRadius: '12px ',
        marginBottom: '10px',
        cursor:'pointer',

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
        width: '19%',
        borderRadius: '10px ',
        border: '2px solid transparent',

        '&:hover': {

            border: '2px solid hsl(26, 100%, 55%)',
            backgroundColor: 'black',
        },


    }
})