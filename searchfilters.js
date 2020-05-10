import React, { Component } from 'react';
import './searchfilters.css';

class SearchFilters extends Component {
    render() {
        return (
            <div className='Search_Filters'>
                <form>
                    <label htmlFor='Print_Type'>Print Type:</label>
                    <select
                        id='Print_Type'
                        name='Print_Type'
                        onChange={e => this.props.handlePrintTypeChange(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Books">Books</option>
                            <option value="Magazines">Magazines</option>
                        </select>
                    <label htmlFor='Book_Type'>Book Type:</label>
                    <select
                        id='Book_Type'
                        name='Book_Type'
                        onChange={e => this.props.handleBookTypeChange(e.target.value)}>
                            <option value="No Filter">No Filter</option>
                            <option value="ebooks">ebooks</option>
                            <option value="free-ebooks">Free ebooks</option>
                            <option value="full">Full</option>
                            <option value="paid-ebooks">Paid ebooks</option>
                            <option value="partial">Partial</option>
                        </select>
                </form>
            </div>
        );
    }
}

export default SearchFilters;