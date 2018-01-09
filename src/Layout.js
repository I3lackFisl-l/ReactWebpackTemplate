import React, { Component } from 'react';
import config from 'config';

class Layout extends Component {
    render() {
        console.log('baseServiceUrl', config)
        return (
            <div>
                Hello World
            </div>
        );
    }
}

export default Layout;