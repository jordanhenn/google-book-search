import React, { Component } from 'react';
import './App.css';
import SearchForm from './searchform';
import ResultList from './resultlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: 'All',
      bookType: 'No Filter',
      results: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const {searchTerm, printType, bookType} = this.state;
    const api_Key = 'AIzaSyB-o4QN68siVEwAg4OhlRvU29uNupCIUm8';
    const url = (bookType === 'No Filter') 
      ? `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&printType=${printType}&key=${api_Key}` 
      : `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&printType=${printType}&filter=${bookType}&key=${api_Key}`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          results: data.items
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }
  updatePrintType(option) {
    this.setState({
      printType: option
    })
  }
  updateBookType(option) {
    this.setState({
      bookType: option
    })
  }

  render() {
    return (
      <div className='App'>
        <SearchForm 
          searchTerm={this.state.searchTerm}
          printType={this.state.printType}
          bookType={this.state.bookType}
          handleUpdate={term=>this.updateSearchTerm(term)}
          handlePrintTypeChange={option=>this.updatePrintType(option)}
          handleBookTypeChange={option=>this.updateBookType(option)}
          handleSubmit={e=>this.handleSubmit(e)}
          />
        <ResultList results={this.state.results}/>
      </div>
    );
  }
}

export default App;