import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import config from 'config'
import Map from './Map/Map'
import * as ActionMap from './Actions/Map/ActionMap'
import CurrentLocation from './Containers/CurrentLocation'
import PropTypes from 'prop-types'

class Layout extends Component {
    render() {
        console.error('baseServiceUrl', config)
        const {map, mapActions} = this.props
        return (
            <div>
                <Map mapData={map}/>
                <CurrentLocation mapActions={mapActions}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    map: state.map
})

const mapDispatchToProps = dispatch => ({
    mapActions: bindActionCreators(ActionMap, dispatch)
})


Layout.propTypes = {
    map : PropTypes.object.isRequired,
    mapActions : PropTypes.object.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)

