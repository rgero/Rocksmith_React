import React from 'react';
import {connect} from 'react-redux';
//Components
import Header from './Header';
import SearchHeader from './SearchHeader';
import { SearchForm } from './SearchForm';

class SearchPage extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(query){
    this.props.onSubmit(query);
    this.props.history.push('/results')
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchHeader/>
        <SearchForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(undefined, undefined)(SearchPage);
