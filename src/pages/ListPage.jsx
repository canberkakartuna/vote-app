import React from 'react';
import AddLink from '../components/AddLink/AddLink';
import Divider from '@material-ui/core/Divider';
import OrderBy from '../components/OrderBy/OrderBy';
import { makeStyles } from '@material-ui/core/styles';
import LinkCard from '../components/LinkCard/LinkCard';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '360px',
    maxWidth: '400px',
    margin: 'auto'
  },
}));


const ListPage = ({ setNewLinkStatus }) => {
  const classes = useStyles();

  return(
    <div className={classes.container}>
      <AddLink setNewLinkStatus={setNewLinkStatus} />
      <Divider style={{margin: '20px 0'}}/>
      <OrderBy />
      {['1', '2', '3'].map((res) => {
        return(
          <LinkCard key={res}/>
        )
      })}
      <Pagination style={{margin: 'auto'}} count={10} shape="rounded" />
    </div>
  )
}

export default ListPage;
