import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import './App.css';



/**
 * 2. Modal:
 * - new button (primary),
 * - "title"
 * - "message" to be shown within the dialog
 * - The modal should be styled as shown in this mockup. 
 * 
 * - using Material UI component for the dialog/modal and button, 
 * - but other parts styled for a different UI. 
 * Yellow is #F5CE23.
 */


const Modal = ({ handleClickOpen, handleClose, isOpen }) => {

  const styles = {
    primaryBtn: {
      backgroundColor: '#86bf40',
      color: '#fff',
      textTransform: 'uppercase',
    },
  };
  
  return(
    <div>
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} style={styles.primaryBtn}>
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>






      {/* <Button variant= "contained" color="primary" style={styles.primaryBtn}>
        Done
      </Button> */}
    </div>
  );

};


class App extends Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const styles = {
      mainContainer: {
        padding: '3rem',
      },
    };

    return (
      <div className="App" style={styles.mainContainer}>

        <Modal handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} isOpen={this.state.open} />


        <Button onClick={this.handleClickOpen}>Open Modal</Button>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
