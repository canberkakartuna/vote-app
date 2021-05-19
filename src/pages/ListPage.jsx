import React, { useEffect, useState } from 'react';
import AddLink from '../components/AddLink/AddLink';
import Divider from '@material-ui/core/Divider';
import OrderBy from '../components/OrderBy/OrderBy';
import { makeStyles } from '@material-ui/core/styles';
import LinkCard from '../components/LinkCard/LinkCard';
import Pagination from '@material-ui/lab/Pagination';
import { Typography } from '@material-ui/core';

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

  const [links, setLinks] = useState();

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem('links')));
  }, [])

  return(
    <div className={classes.container}>
      <AddLink/>
      <Divider style={{margin: '20px 0'}}/>

      {
        (links && links.length !== 0) ? <OrderBy /> : null
      }

      {
      (links || []).filter((res) =>((page-1) * 5 < res.id) && res.id < page * 5 + 1).map(({id, ...otherProps}) => {
        return(
          <div key={id}>
            <LinkCard id={id} {...otherProps} setLinks={setLinks} />
          </div>
        )
      }) 
      }

      {
         (links && links.length === 0) ? (
           <Typography style={{textAlign: 'center'}}>No Vote</Typography>
         ) : null
      }

      {
        (links && links.length !== 0) ?  <Pagination page={page} onChange={(e, p) => setPage(p)} style={{margin: 'auto'}} count={Math.ceil(JSON.parse(localStorage.getItem('links')).length / 5)} shape="rounded" />: null
      }
     
    </div>
  )
}

export default ListPage;
