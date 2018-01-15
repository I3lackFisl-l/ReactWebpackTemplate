import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Route extends Component {
    constructor(){
        super()
        
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        const {mapActions} = this.props
        mapActions.ActionRoute();
    }

    render() {
        return (
            <button onClick={this.onClick}>Route</button>
        );
    }
}

Route.propTypes = {
    mapActions : PropTypes.object.isRequired
};

export default Route;