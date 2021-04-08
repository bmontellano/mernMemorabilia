
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  }, 
  [theme.breakpoints.down('xs')]: {
    paper: {
      padding: theme.spacing(2),
      width: '137%',
      position: 'absolute',
      top: '-30px',
      left: '-50px'
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  closeButton: {
    padding: 0,
    margin: 0,
    float: 'right',
    minWidth: 0
  },
  modalButton: {
    fontSize: 36
  }
}));
