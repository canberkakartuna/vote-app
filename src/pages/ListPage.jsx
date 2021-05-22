import React, { useEffect, useLayoutEffect, useState } from 'react';
import AddLink from '../components/AddLink/AddLink';
import Divider from '@material-ui/core/Divider';
import OrderBy from '../components/OrderBy/OrderBy';
import { makeStyles } from '@material-ui/core/styles';
import LinkCard from '../components/LinkCard/LinkCard';
import Pagination from '@material-ui/lab/Pagination';
import { Typography } from '@material-ui/core';
import InfoToast from '../components/InfoToast/InfoToast';
import OutsideAlerter from '../custom-hooks/OutsideAlerter';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '320px',
    maxWidth: '400px',
    margin: 'auto'
  },
}));


const ListPage = () => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [links, setLinks] = useState();
  const [deletedName, setDeletedName] = useState();
  const [currentLinks, setCurrentLinks] = useState();
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);


  useEffect(() => {
    var links = JSON.parse(localStorage.getItem('links'));
    var sorted = (links || []).sort(function(a, b) {
      return b.voteTime - a.voteTime;
    })
    setLinks(sorted);
  }, [])

  useLayoutEffect(() => {
    const indexOfLastLink = page * 5;
    const indexOfFirstLink = indexOfLastLink - 5;
    setCurrentLinks((links || []).slice(indexOfFirstLink, indexOfLastLink));
    setLoading(false);
  }, [links, page])

  
  if(!loading){
    if ((links && links.length === 0) || (!links) ){
      return (
        <div className={classes.container}>
          <AddLink/>
          <Typography style={{textAlign: 'center', marginTop: '20px'}}>No Link</Typography>
        </div>
      )
    } else {
      return(
        <div className={classes.container}>
          <AddLink/>

          <Divider style={{marginTop: '20px'}}/>
    
          {(links && links.length !== 0) ? (
            <OutsideAlerter visibility={clicked} setVisibility={setClicked}>
              <OrderBy clicked={clicked} setClicked={setClicked} setLinks={setLinks} /> 
            </OutsideAlerter>
          )
          : null}
    
          {(currentLinks || []).map(({id, ...otherProps}) => (
            <div key={id}>
              <LinkCard
                id={id}
                {...otherProps}
                setLinks={setLinks}
                setDeleteStatus={setDeleteStatus}
                setDeletedName={setDeletedName}
              />
            </div>
          ))}

          <Pagination 
            page={page}
            onChange={(e, p) => setPage(p)} style={{margin: 'auto'}}
            count={Math.ceil(links.length / 5)}
            shape="rounded"
          />

          <InfoToast
            resetStatus={setDeleteStatus}
            snackOpen={deleteStatus}
            snackVertical="top"
            snackHorizontal="center"
            message={`<b>${deletedName}</b> removed.`}
          />
        </div>
      )
    }
  } else {
    return(
      null
    )
  }
}

export default ListPage;
