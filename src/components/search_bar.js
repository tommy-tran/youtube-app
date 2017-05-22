import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
        <div className="search-bar">
            <input
                value={this.state.term} 
                onChange={event => this.onInputChange(event.target.value) }
                onKeyPress={event => this.onEnter(event.target.value)}
                />
        </div>
        );
    }

    onEnter(term) {
        this.setState({term});
        this.props.onEnter(term);
    }
}


export default SearchBar;