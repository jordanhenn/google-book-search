import React, { Component } from 'react';
import './searchform.css';
import SearchBar from './searchbar';
import SearchFilters from './searchfilters';

class SearchForm extends Component {
    render() {
        return (
            <div className='SearchForm'>
                <div className='SearchForm__heading'>
                    <h1>Google Book Search</h1>
                </div>
                <div className='SearchForm__controls'>
                    <SearchBar 
                        searchTerm={this.props.searchTerm}
                        handleUpdate={this.props.handleUpdate}
                        handleSubmit={this.props.handleSubmit}/>
                    <SearchFilters
                        printType={this.props.printType}
                        bookType={this.props.bookType}
                        handlePrintTypeChange={this.props.handlePrintTypeChange}
                        handleBookTypeChange={this.props.handleBookTypeChange}/>
                </div>
            </div>
        );
    }
}

export default SearchForm;