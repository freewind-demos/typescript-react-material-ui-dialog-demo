import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import SimpleDialog from './SimpleDialog';

export default function Hello() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return <>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Open dialog
    </Button>
    <SimpleDialog open={open} onClose={handleClose} title={'hello dialog'}>
      <Typography>
        Hello body
      </Typography>
    </SimpleDialog>
  </>
};
