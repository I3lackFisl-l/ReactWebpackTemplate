import React, { Component } from 'react'
import config from 'config'
import Map from './Map/Map'

class Layout extends Component {
    render() {
        console.error('baseServiceUrl', config)
        return (
            <div>
                {/* <div>Hello World</div> */}
                <Map/>
            </div>
        )
    }
}

export default Layout