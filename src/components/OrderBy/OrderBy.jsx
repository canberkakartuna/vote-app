import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  orderByContainer: {
    position: 'relative',
    margin: '20px 0 55px 0',
  },
  absoluteContent: {
    backgroundColor: '#ededed',
    border: "1px solid #cfcfcf",
    borderRadius: '3px',
    position: 'absolute',
    width: '50%',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  arrow: {
    float: 'right',
    borderLeft: '1px solid #cfcfcf',
    padding: '4px'
  },
  menu: {
    border: '1px solid #cfcfcf',
    backgroundColor: '#ededed',
  },
  menuOption: {
    padding: '5px 8px',
    borderBottom: '1px solid #cfcfcf'
  }
}));


export default function OrderBy({ clicked, setClicked, setLinks }) {
  const classes = useStyles();
  const [hoverFirst, setHoverFirst] = useState(false);
  const [hoverSec, setHoverSec] = useState(false);
  const [menuText, setMenuText] = useState('Order By');

  const handleSelect = () => {
    setClicked(!clicked);
  }

  const handleOption = (e, v) => {
    setMenuText(e.target.innerHTML);
    var links = JSON.parse(localStorage.getItem('links'));

    if(v === 1) {
      let sorted = (links || []).sort(function(a, b) {
        return b.voteTime - a.voteTime;
      }).sort(function(a, b) {
        return b.voteCount - a.voteCount;
      })

      setLinks(sorted);
    } else if(v === 2) {
      let sorted = (links || []).sort(function(a, b) {
        return b.voteTime - a.voteTime;
      }).sort(function(a, b) {
        return a.voteCount - b.voteCount;
      })

      setLinks(sorted);
    }
  }

  return (
    <div className={classes.orderByContainer} onClick={handleSelect}>
      <div className={classes.absoluteContent}>
        <div> 
          <Typography style={{display: 'inline-block', padding: '4px 8px'}}>
            {menuText}
          </Typography>
          <ArrowDropDownIcon className={classes.arrow}/>
        </div>
        <div className={classes.menu} style={clicked ? {display: 'block'} : {display: 'none'}}>
          <Typography
            className={classes.menuOption}
            onMouseEnter={() => setHoverFirst(true)}
            onMouseLeave={() => setHoverFirst(false)}
            onClick={(e) => handleOption(e, 1)}
            style={hoverFirst ? {backgroundColor: '#cfcfcf'} : {}}
          >
            Most Voted (Z &#8594; A)
          </Typography>
          <Typography
            className={classes.menuOption}
            onClick={(e) => handleOption(e, 2)}
            onMouseEnter={() => setHoverSec(true)}
            onMouseLeave={() => setHoverSec(false)}
            style={hoverSec ? {backgroundColor: '#cfcfcf'} : {}}
          >
            Less Voted (A &#8594; Z)
          </Typography>
        </div>
      </div>
    </div>
  );
}
