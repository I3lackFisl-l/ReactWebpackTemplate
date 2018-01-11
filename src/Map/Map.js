import React, {Component} from 'react';
import { loadModules } from 'esri-loader';
import './Map.scss'

class Map extends Component {
    componentDidMount() {
        const options = {
            url: 'https://js.arcgis.com/4.6/',
        }
        loadModules(['esri/Map',
            'esri/views/SceneView',
            'dojo/query',
            'dojo/on',
            'dojo/domReady!'], options)
            .then(([Map, SceneView]) => {
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
            })
            .catch(err => {
                // handle any script or module loading errors
                console.error(err);
            });
    }
    render() {
        return ( 
            <div ref={node=>{this.mapNode = node}} className='map'></div>
        );
    }
}

export default Map;