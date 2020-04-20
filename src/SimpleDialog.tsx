import {DialogProps} from '@material-ui/core/Dialog/Dialog';
import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

type DialogTitleProps = WithStyles<typeof styles> & {
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export type SimpleDialogProps = {
  title?: React.ReactNode | React.ReactNodeArray
  children?: React.ReactNode | React.ReactNodeArray,
  footer?: React.ReactNode | React.ReactNodeArray,
  okText?: string,
  open: boolean,
  maxWidth?: DialogProps['maxWidth'],
  onClose: () => void
}

export default function SimpleDialog(
  {
    title,
    open,
    children,
    okText,
    maxWidth = 'md',
    onClose,
  }: SimpleDialogProps
) {
  return (
    <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth={maxWidth}>
      <DialogTitle onClose={onClose}>
        {title}
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
      {okText && <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          {okText}
        </Button>
      </DialogActions>}
    </Dialog>
  );
}
