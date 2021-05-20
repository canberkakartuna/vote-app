import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Typography } from '@material-ui/core';


export default function InfoToast({
  snackOpen, snackVertical, snackHorizontal, message, resetStatus
}) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  useEffect(() => {
    setState({
      open: snackOpen,
      vertical: snackVertical,
      horizontal: snackHorizontal,
    });
  }, [snackOpen, snackVertical, snackHorizontal]);

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    resetStatus(false);
  };

  return (
    <div>
      <Snackbar  anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Typography style={{backgroundColor: '#ccff99', color: '#green', padding: '10px 20px', borderRadius: '2px', fontSize: '25px'}}>
          <div dangerouslySetInnerHTML={{ __html: message }}></div>
        </Typography>
      </Snackbar>
    </div>
  );
}
