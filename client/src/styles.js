import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,.07)'
    },
    heading: {
        color: 'rgba(0,183,255,1)',
    },
    image: {
        marginLeft: '25px',
    },
    [theme.breakpoints.down('xs')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }
}));