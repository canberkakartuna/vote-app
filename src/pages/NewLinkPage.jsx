import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import InfoToast from '../components/InfoToast/InfoToast';
 
const useStyles = makeStyles(() => ({
  flexContainer:{
    minWidth: '320px',
    maxWidth: '400px',
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

function isUrlValid(userInput) {
  var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
  var url = new RegExp(regexQuery,"i");
  return url.test(userInput);
}

const NewLinkPage = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [addedStatus, setAddedStatus] = useState();
  const [submited, setSubmited] = useState(false);

  const handleAdd = () => {
    setSubmited(true);
    if(name !== '' && (url !== '' && isUrlValid(url))) {
      const oldLinks = JSON.parse(localStorage.getItem('links'));
      if(oldLinks){
        localStorage.setItem('links', JSON.stringify([{
          id: oldLinks.length + 1,
          name,
          url,
          voteCount:0,
          voteTime: Date.now()
        },...oldLinks]))
      } else {
        localStorage.setItem('links', JSON.stringify([{
          id: 1,
          name,
          url,
          voteCount: 0,
          voteTime: Date.now()
        }]))
      }
      setAddedStatus(true);
    }
  }


  return(
    <form>
      <div className={classes.flexContainer}>
        <div className={classes.flexRow}>
          <Link to='/vote-app'>
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
          <TextField error={!name && submited} helperText={(!name && submited) ?  'Please write link name.' : ''} onChange={(e) => setName(e.target.value)} variant="outlined" margin="dense" fullWidth placeholder="e.g. Alphabet"/>
        </div>
        <div className={classes.row}>
          <Typography>Link URL:</Typography>
          <TextField error={(!url || !isUrlValid(url)) && submited} helperText={((!url || !isUrlValid(url)) && submited) ?  'Please write valid url.' : ''} onChange={(e) => setUrl(e.target.value)} required variant="outlined" margin="dense" fullWidth placeholder="e.g. http://abc.xyz"/>
        </div>
        <div>
          <Button data-testid="add-link" className={classes.addButton} onClick={handleAdd}>ADD</Button> 
        </div>
      </div>
      <InfoToast resetStatus={setAddedStatus} snackOpen={addedStatus} snackVertical="top" snackHorizontal="center" message={`<b>${name}</b> added.`} />
    </form>
  )
}

export default NewLinkPage;
