import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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
    marginTop: '15px'
  }
}));

export default function RemoveModal({ children, setOpen, open, setHover }) {
  const classes = useStyles();

  const handleClose = () => {
    setHover(false);
    setOpen(false);
  };

  const handleDelete = () => {
    setHover(false);
    setOpen(false);
  }

  return (
    <div>
      {children}
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography className={classes.modalHeader}>
              Remove Link
            </Typography>
            <Divider />
            <div className={classes.modalContent}>
              <Typography>
                Do you want to remove:
              </Typography>
              <Typography className={classes.boldText}>Hacker News</Typography>
              <div className={classes.buttons}>
                <Button className={classes.modalButton} onClick={handleDelete}>OK</Button>
                <Button className={classes.modalButton} onClick={handleClose}>CANCEL</Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}