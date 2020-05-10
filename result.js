import React, { Component } from 'react';
import './result.css';

class Result extends Component {
    render() {
        const price = (this.props.info.saleInfo.listPrice == undefined)
            ? 'No Price Listed'
            : this.props.info.saleInfo.listPrice.amount;
        const author = (this.props.info.volumeInfo.authors !== undefined)
            ? (this.props.info.volumeInfo.authors.length > 1)
            ? this.props.info.volumeInfo.authors.join(', ')
            : this.props.info.volumeInfo.authors
            : this.props.info.volumeInfo.authors;
        const textSnippet = (this.props.info.searchInfo !== undefined)
            ? this.props.info.searchInfo.textSnippet
            : 'No text snippet provided.';
        return (
            <li className='Result'>
                <h2 className='Book_Title'>{this.props.info.volumeInfo.title}</h2>
                <div className='Image_Info'>
                    <img className='Book_Cover' src={this.props.info.volumeInfo.imageLinks.smallThumbnail} alt={this.props.info.volumeInfo.title}/>
                    <div className='Book_Info'>
                        <p className='Author'>Author: {author}</p>
                        <p className='Price'>Price: {price}</p>
                        <p className='Description'>{textSnippet}</p>
                        </div>
                </div> 
            </li>
        );
    }
}

export default Result;