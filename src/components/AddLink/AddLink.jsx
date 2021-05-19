import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f9f9f9'
  },
  submitLabel: {
    margin: 'auto',
  },
  submitButton: {
    margin: '10px',
    border: '0.1px solid black',
    boxShadow: 'none',
    color: 'black'
  },
  addIcon: {
    fontSize: '50px',
  }
}));


const AddLink = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Link to='/add-link' className={classes.submitButton} variant="contained" color="default">
          <AddIcon className={classes.addIcon}/>
        </Link>
        <Typography className={classes.submitLabel} variant="h5" component="h4">SUBMIT A LINK</Typography>
      </div>
    </>
  )
}

export default AddLink;
