import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Map from './Map/Map'
import * as ActionMap from './Actions/Map/ActionMap'
import PropTypes from 'prop-types'
import Footer from './Containers/Footer'

class Layout extends Component {
    render() {
        const {map, mapActions} = this.props
        // console.log(mapEvt);
        return (
            <div>
                <Map mapData={map} mapActions={mapActions}/>
                <Footer />
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

