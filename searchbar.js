import React, { Component } from 'react';
import './searchbar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className='SearchBar'>
                <form className="search" onSubmit={e => this.props.handleSubmit(e)}>
                    <label htmlFor="search">Search:</label>
                    <input 
                    type="text"
                    name="search"
                    id="search"
                    placeholder='book search' 
                    value={this.props.searchTerm}
                    onChange={e => this.props.handleUpdate(e.target.value)}/>  
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;