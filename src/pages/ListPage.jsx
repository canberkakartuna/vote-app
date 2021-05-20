import React, { useEffect, useState } from 'react';
import AddLink from '../components/AddLink/AddLink';
import Divider from '@material-ui/core/Divider';
import OrderBy from '../components/OrderBy/OrderBy';
import { makeStyles } from '@material-ui/core/styles';
import LinkCard from '../components/LinkCard/LinkCard';
import Pagination from '@material-ui/lab/Pagination';
import { Typography } from '@material-ui/core';
import InfoToast from '../components/InfoToast/InfoToast';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '360px',
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

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem('links')));
  }, [])

  const indexOfLastLink = page * 5;
  const indexOfFirstLink = indexOfLastLink - 5;
  const currentLinks = (links || []).slice(indexOfFirstLink, indexOfLastLink);

  return(
    <div className={classes.container}>
      <AddLink/>
      <Divider style={{margin: '20px 0'}}/>

      {(links && links.length !== 0) ? <OrderBy /> : null}

      {(currentLinks || []).map(({id, ...otherProps}) => {
        return(
          <div key={id}>
            <LinkCard id={id} {...otherProps} setLinks={setLinks} setDeleteStatus={setDeleteStatus} setDeletedName={setDeletedName} />
          </div>
        )
      })}

      {(links && links.length === 0) || (!links) ? (
          <Typography style={{textAlign: 'center'}}>No Link</Typography>
        ) : null}

      {(links && links.length !== 0) ?  (
        <Pagination 
          page={page}
          onChange={(e, p) => setPage(p)} style={{margin: 'auto'}}
          count={Math.ceil(JSON.parse(localStorage.getItem('links')).length / 5)}
          shape="rounded" />) : null}
      <InfoToast resetStatus={setDeleteStatus} snackOpen={deleteStatus} snackVertical="top" snackHorizontal="center" message={`<b>${deletedName}</b> removed.`} />
    </div>
  )
}

export default ListPage;
