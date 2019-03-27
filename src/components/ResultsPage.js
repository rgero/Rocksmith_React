import React, { Component } from 'react';

//Components
import Header from './Header';
import DLCList from './DLCList';

export class ResultsPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <DLCList/>
      </div>
    );
  }
}

export default ResultsPage;
