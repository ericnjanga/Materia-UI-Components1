import React, { Component } from 'react';
import Modal from './components/modal.js';
import Button from '@material-ui/core/Button';
import { appStyles, dummyData, arrCandidates, DisplayList } from './settings.js';
import './App.css';


/**
 * Main Application:
 * -----------------
 * - Control the modal component (on/off)
 * - Sort incomming array of items
 */


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      candidates: arrCandidates,
    };
  }


  handleModalOpen = () => {

    this.setState({ open: true });

  };


  handleModalClose = () => {

    this.setState({ open: false });

  };


  /**
   * Return an array of the top 10 where responses is 1 or more, 
   * sorted in descending order by responses, and then by name in ascending order.
   * @param {*} list 
   */
  getTopTen(list, preset) {

    // We need to keep the original array intact
    const listCopy = [...list];

    // Sort array by number
    if (preset === 'number') {

      listCopy.sort(function(a, b) {
        return a[preset] - b[preset];
      });

    } else {

      // Sort array by name
      listCopy.sort(function(a, b) {
        const n1 = a[preset].toLowerCase(),
              n2 = b[preset].toLowerCase();
        if (n1 < n2) {
          return -1;
        } else if (n1 > n2) {
          return 1;
        } else {
          return 0;
        } 
      });

    }

    // Return the first 10 elements of the array
    return listCopy.slice(0, 10);
  }


  /**
   * - Sort array of candidates by "name" and by "number"
   * - Save sort result in the state
   * (State shouldn't be changed in "componentDidMount" lifecycle function)
   */
  onMount = () => {

    const arrTop10Numbers = this.getTopTen(this.state.candidates, 'number');
    const arrTop10Names = this.getTopTen(this.state.candidates, 'name');

    this.setState({ arrTop10Numbers, arrTop10Names });

  };


  /**
   * Right after the component mount, sort the array by "number" and "name"
   */
  componentDidMount() {

    this.onMount();

  }


  render() {

    return (
      <div className="App" style={appStyles.mainContainer}>
        <Button variant="contained" color="secondary" onClick={this.handleModalOpen}>Open Modal</Button>

        <div style={{ display: 'flex', marginTop: '20px' }}>
          <DisplayList list={this.state.arrTop10Names} title={'Top 10 (Sorted By Name)'} />
      
          <DisplayList list={this.state.arrTop10Numbers} title={'Top 10 (Sorted By Number)'} />
        </div>
        
        <Modal 
          title={dummyData.title}
          message={dummyData.msg}
          handleClose={this.handleModalClose}
          isOpen={this.state.open}
        />
      </div>
    );

  }
}

export default App;
