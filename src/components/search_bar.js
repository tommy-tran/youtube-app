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
                onKeyPress={event => {
                    if (event.key == "Enter") {
                        this.onEnter(event.target.value);
                    }
                }
                }
                />
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
    }

    onEnter(term) {
        this.setState({term});
        this.props.onEnter(term);
    }
}


export default SearchBar;