import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  flexContainer:{
    minWidth: '400px',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)'
  },
  flexRow: {
    display: 'flex'
  },
  backIcon: {
    color: 'black',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  linkLabel: {
    marginLeft: '5px',
    marginTop: '1px'
  },
  row: {
    margin: '15px 0'
  },
  addButton: {
    background: 'black',
    color: 'white',
    borderRadius: '50px',
    padding: '10px 30px',
    fontWeight: 'bold',
    float: 'right',
    '&:hover': {
      background: 'black'
    }
  }
}));


const NewLinkPage = () => {
  const classes = useStyles();
  const [name, setName] = useState();
  const [url, setUrl] = useState();

  const handleAdd = () => {
    const oldLinks = JSON.parse(localStorage.getItem('links'))
    if(oldLinks){
      localStorage.setItem('links', JSON.stringify([...oldLinks, {
        id: oldLinks.length + 1,
        name,
        url,
        voteCount:0,
        voteTime: Date.now()
      }]))
    } else {
      localStorage.setItem('links', JSON.stringify([{
        id: 1,
        name,
        url,
        voteCount: 0,
        voteTime: Date.now()
      }]))
    }
  }


  return(
    <div>
      <div className={classes.flexContainer}>
        <div className={classes.flexRow}>
          <Link to='/'>
            <ArrowBackIcon className={classes.backIcon}/>
          </Link>
          <Typography className={classes.linkLabel}>
            Return to List
          </Typography>
        </div>
        <Typography style={{margin: '25px 0', fontWeight: 'bold'}} variant="h4" component="h4">
          Add New Link
        </Typography>
        <div className={classes.row}>
          <Typography>Link Name:</Typography>
          <TextField onChange={(e) => setName(e.target.value)} variant="outlined" margin="dense" fullWidth placeholder="e.g. Alphabet"/>
        </div>
        <div className={classes.row}>
          <Typography>Link URL:</Typography>
          <TextField onChange={(e) => setUrl(e.target.value)} variant="outlined" margin="dense" fullWidth placeholder="e.g. http://abc.xyz"/>
        </div>
        <div>
          <Button className={classes.addButton} onClick={handleAdd}>ADD</Button> 
        </div>
      </div>
    </div>
  )
}

export default NewLinkPage;
