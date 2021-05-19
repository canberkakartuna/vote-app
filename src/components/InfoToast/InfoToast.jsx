import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function InfoToast({ children, toastStatus }) {
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  useEffect(() => {
    setState({ open: true, ...toastStatus });

    console.log('worked! ', toastStatus);
  }, [toastStatus])



  const handleClose = () => {
    setState({ ...state, open: false });
  };


  return (
  <div>
    {children}
    {/* <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button> */}
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message="I love snacks"
      key={vertical + horizontal}
    />
  </div>
  );
}