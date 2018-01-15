import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CurrentLocation extends Component {
    constructor(){
        super()
        
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        const {mapActions} = this.props
        this.getCurrentLocation().then(res => {
            mapActions.ActionSetCenterMap(res.lat, res.lon);
        }).catch(err => {
            console.error('error get currentlocation :', err)
        })
    }

    getCurrentLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((res) => {
                    resolve({
                        lat: res.coords.latitude,
                        lon: res.coords.longitude
                    });
                }, (err) => {
                    switch (err.code) {
                        case err.PERMISSION_DENIED:
                            reject('Error : User denied the request for Geolocation.');
                            break;
                        case err.POSITION_UNAVAILABLE:
                            reject('Error : Location information is unavailable.');
                            break;
                        case err.TIMEOUT:
                            reject('Error : The request to get user location timed out.');
                            break;
                        case err.UNKNOWN_ERROR:
                            reject('Error : An unknown error occurred.');
                            break;
                    }
                });
            } else {
                reject('Error : Geolocation is not supported by this browser.');
            }

        });
    }

    render() {
        return (
            <button onClick={this.onClick}>GetCurrent Location</button>
        );
    }
}


CurrentLocation.propTypes = {
    mapActions : PropTypes.object.isRequired
}


export default CurrentLocation;