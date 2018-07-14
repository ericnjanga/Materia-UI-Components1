import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


import TextField from '@material-ui/core/TextField';


import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import './App.css';



/**
 * 2. Modal:
 * [DONE] new button (primary),
 * [DONE] "title"
 * [DONE] "message" to be shown within the dialog
 * [DONE] The modal should be styled as shown in this mockup. 
 * 
 * - using Material UI component for the dialog/modal and button, 
 * - but other parts styled for a different UI. 
 * Yellow is #F5CE23.
 */


const Modal = ({ title, message, handleClickOpen, handleClose, isOpen }) => {

  const styles = {
    title: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#F5CE23',
    },
    body: {
      padding: '30px 20px',
    },
    footer: {
      margin: '0',
      padding: '10px 20px',
      borderTop: '1px solid #ccc',
    },
    btnClose: {
      position: 'absolute',
      top: '-6px',
      right: '0',
      width: '20px!important',
    },
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
          <DialogTitle id="form-dialog-title" style={styles.title}>
            {title} 

            <IconButton style={styles.btnClose} onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent style={styles.body}>
            <DialogContentText>
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions style={styles.footer}> 
            <Button onClick={handleClose} style={styles.primaryBtn}>
              Done
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
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };


    const dummyData = {
      title: 'Custom Modal Title',
      msg: `Carrot cake halvah brownie fruitcake sesame snaps fruitcake. 
              Powder cake cake. Muffin chocolate marzipan macaroon gingerbread. 
              Candy toffee apple pie marshmallow. Cheesecake sweet sweet roll. 
              Jelly-o danish lollipop pudding tootsie roll brownie jelly. 
              Cookie tart candy pastry jelly dessert chupa chups sweet roll sweet roll. 
              Soufflé jujubes bonbon pie. Chocolate cake powder cupcake wafer. 
              Bear claw cake ice cream jelly beans pie. 
              Danish pastry bonbon liquorice gummies bear claw. 
              Danish carrot cake cake donut ice cream croissant gingerbread lollipop bonbon. 
              Lollipop gingerbread gummi bears donut pie. 
              Brownie liquorice soufflé bear claw topping marshmallow croissant icing.`
    };

    return (
      <div className="App" style={styles.mainContainer}>

        <Modal 
          title={dummyData.title}
          message={dummyData.msg}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
          isOpen={this.state.open}
        />

        <Button onClick={this.handleClickOpen}>Open Modal</Button>

      </div>
    );
  }
}

export default App;
