import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/common.scss'
import CurrentLocation from './CurrentLocation'
import Route from './Route'
import * as ActionMap from '../Actions/Map/ActionMap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Footer extends Component {
    render() {
        const {mapActions, mapEvt} = this.props
        console.log(mapEvt)
        return (
            <div className='button'>
                <Route mapActions={mapActions}/>
                <CurrentLocation mapActions={mapActions}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mapEvt: state.mapEvt
})

const mapDispatchToProps = dispatch => ({
    mapActions: bindActionCreators(ActionMap, dispatch)
})

Footer.propTypes = {
    mapActions: PropTypes.object.isRequired,
    mapEvt: PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(Footer)