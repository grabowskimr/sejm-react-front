import React from 'react';

import Search from './Search';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Search />
        )
    }
}

export default HomePage;