
import { makeStyles } from '@mui/styles';

export const ContentTextStyle = makeStyles({
    divContentBox: {
        width: '50vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',


    },
    BoxContentText: {
        width: '400px !important',
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: '0px',


    },
    TypOverLine: {
        padding: '10px 0px',
        fontWeight: '800 !important',
        color: 'hsl(26, 100%, 55%)',

    },
    TypTitle: {
        fontWeight: '700 !important',
        textTransform: 'capitalize',
        padding: '0px 0px 10px',

    },
    TypParagraph: {
        padding: '0px 0px 10px',
        fontSize: '.9rem !important',
        color: 'rgba(0,0,0,.6)',
    },
    TypPrice: {
        fontWeight: '600 !important',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    TypPrice2: {
        fontSize: '12px',
        fontWeight: '600 !important',
        background: 'hsl(25, 100%, 94%)',
        margin: ' 0px 0px 0px 10px',
        color: 'hsl(26, 100%, 55%)',
        padding: '0px 2px',
        borderRadius: '3px',

    },
    Small: {
        color: 'rgba(0,0,0,.6)',
        marginBottom: '10px !important',
        textDecoration: 'line-through',

    },
    // BUTTOMTEXT
    
    AddIcon: {
        color: 'hsl(26, 100%, 55%) !important',
        background: 'rgba(0,0,0,.04) !important',
        borderRadius: '10px 0px 0px 10px !important',
    },
    SpanNum: {
        backgroundColor: 'rgba(0,0,0,.04) !important',
        color: 'black !important',
        fontWeight: '600 !important',
        border: 'none !important'
    },
    SubsIcon: {

        color: 'hsl(26, 100%, 55%) !important',
        background: 'rgba(0,0,0,.04) !important',
        borderRadius: '0px 10px 10px 0px !important',
    },
    CartAdd: {
        color: 'hsl(25, 100%, 94%) !important',
        borderRadius: '10px !important',
        marginLeft: '12px !important',
        backgroundColor: 'hsl(26, 100%, 55%) !important',
        textTransform: 'capitalize !important'
    }


})