import React, {Component} from 'react';
import { loadModules } from 'esri-loader';
import './Map.scss'
import PropTypes from 'prop-types'

class Map extends Component {
    componentDidMount() {
        const options = {
            url: 'https://js.arcgis.com/4.6/',
        }
        loadModules(['esri/Map',
            'esri/views/SceneView',
            'esri/geometry/Point',
            'dojo/domReady!'], options)
            .then(([Map, SceneView, Point]) => {
                // create map with the given options at a DOM node w/ id 'mapNode'
                const map = new Map({
                    basemap: 'dark-gray'
                });
                const view = new SceneView({
                    container: this.mapNode,
                    map: map,
                    zoom: 4
                });
                
                this.view = view;

                const initPnt = new Point({
                    longitude: 100.528070,
                    latitude: 13.729486
                });
                
                this.zoomToPoint(initPnt);
            })
            .catch(err => {
                // handle any script or module loading errors
                console.error(err);
            });
    }

    zoomToPoint(lat, long){
        this.view.goTo({
            center: [long, lat],
            zoom: 14
        }, {
            speedFactor: 0.75
        })
    }

    render() {
        const {mapData} = this.props
        console.log(mapData)
        if(mapData.mapCenter!=null){
            this.zoomToPoint(mapData.mapCenter.lat, mapData.mapCenter.long)
        }

        return ( 
            <div ref={node=>{this.mapNode = node}} className='map'></div>
        );
    }
}

Map.propTypes = {
    mapData : PropTypes.object.isRequired
}

export default Map;