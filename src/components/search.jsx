import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="search">
                <input type="text"></input>
                <button>SEARCH</button>
            </form>
        )
    }
}

export default Search;