import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RemoveModal from '../RemoveModal/RemoveModal';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    margin: '12px 0',
    boxShadow: 'none',
    padding: '0 10px'
  },
  cover: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    margin: '12px 0 8px 0',
    border: '1px solid black',
    borderRadius: '5px',     
    backgroundColor: '#ededed',
  },
  link: {
    textDecoration: 'none',
    color: 'gray',
  },
  voteCount: {
    fontSize: '2rem',
    fontWeight: 'bold'
  },  
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  removeIcon: {
    position: 'absolute',
    margin: '-10px 0 0 25px',
    color: 'red',
  }
}));

export default function LinkCard() {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <Card className={classes.root} style={hover ? {backgroundColor: '#efefef'} : {}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className={classes.cover}>
        <Typography className={classes.voteCount}>
          4
        </Typography>
        <Typography>
          POINTS
        </Typography>
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" style={{fontWeight: 'bold'}}>
            Hacker News
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            (
              <a className={classes.link} href="https://news.ycombinator.com/" target="_blank">
                https://news.ycombinator.com/
              </a>
            )
          </Typography>
        </CardContent>
        <div>
          <Button style={{textTransform: 'capitalize', color: 'gray'}}>
            <ArrowUpwardIcon />
            Up Vote
          </Button>
          <Button style={{textTransform: 'capitalize', color: 'gray'}}>
            <ArrowDownwardIcon />
            Down Vote
          </Button>
        </div>
      </div>
      <RemoveModal setOpen={setOpen} open={open} setHover={setHover}>
        <RemoveCircleIcon onClick={() => setOpen(true)} className={classes.removeIcon} style={hover ? {display: 'block', cursor: 'pointer'} : {visibility: 'hidden'}} />
      </RemoveModal>
    </Card>
  );
}