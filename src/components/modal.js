 /**
  * Modal component
  * ----------------
  * Use <Dialog /> Material UI
  * (Display the following)
  * @param {*} title
  * @param {*} message
  * (Controlling the modal)
  * @param {*} handleClose
  * @param {*} isOpen
  */

import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { modalStyles } from './../settings.js';


const Modal = ({ title, message, handleClose, isOpen }) => {

  return(
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" style={modalStyles.title}>
        {title}
        <IconButton style={modalStyles.btnClose} onClick={handleClose} aria-label="Close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent style={modalStyles.body}>
        <DialogContentText>
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions style={modalStyles.footer}> 
        <Button onClick={handleClose} style={modalStyles.primaryBtn}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );

};

export default Modal;
