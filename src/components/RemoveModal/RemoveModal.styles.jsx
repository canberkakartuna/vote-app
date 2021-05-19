import { makeStyles } from '@material-ui/core/styles';

export const modalStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
    },
    modalHeader: {
      background: 'black',
      color: 'white'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      width: '500px',
      height: '200px'
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: '25px'
    },
    modalButton: {
      background: 'black',
      color: 'white',
      borderRadius: '50px',
      margin: '10px',
      padding: '8px',
      fontWeight: 'bold',
      '&:hover': {
        background: 'black'
      }
    },
    modalContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '14px'
    },
    buttons: {
      marginTop: '15px',
      display: 'flex'
    },
    closeIcon: {
      color: 'white',
      float: 'right',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }));