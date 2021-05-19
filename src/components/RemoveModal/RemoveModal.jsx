import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import { modalStyles } from './RemoveModal.styles';

export default function RemoveModal({ children, setOpen, open, setHover, id, setLinks }) {
  const classes = modalStyles();

  const handleClose = () => {
    setHover(false);
    setOpen(false);
  };

  const handleDelete = () => {
    var links = JSON.parse(localStorage.getItem('links'));

    var foundIndex = links.findIndex(link => link.id === id);

    links.splice(foundIndex, 1);

    localStorage.setItem('links', JSON.stringify(links));

    setLinks(links);
    
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
              <CloseIcon className={classes.closeIcon} onClick={handleClose}/>
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