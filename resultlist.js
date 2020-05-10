import React, { Component } from 'react';
import Result from './result';
import './resultlist.css';

class ResultList extends Component {
    render() {
        const results = (this.props.results === null) 
            ? <p>Make a search in the form above.</p>
            : this.props.results.map((result, key) => <Result info={result} key={key}/>);
        return (
            <div className='Result_List'>
                <ul className='Results'>
                    {results}
                </ul>
            </div>
        );
    }
}

export default ResultList;