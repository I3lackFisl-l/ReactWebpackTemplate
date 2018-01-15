import * as actionTypes from '../../Constants/ActionTypes'
import * as serviceUtils from '../../Utilities/ServiceUtil'
import config from 'config'

export const ActionSetCenterMap = (lat, long) => {
    return {
        type: actionTypes.SET_CENTER,
        lat, long
    }
}

export const ActionRoute = () => {
    return (dispatch) => {
        const params = {
            Language:'L',
            Mode:'car',
            Stops: [
                {
                    Lat: 13.722937799999999,
                    Lon: 100.5306038
                },
                {
                    Lat: 13.718763722335055,
                    Lon: 100.52179562559205
                }
            ],
            Tollroad: true
        }
        serviceUtils.fetchPost(config.routeService, params).then(res => {
            res.json().then(data => {
                dispatch(ActionSaveRouteResult(data))
            })
        })
    }
}

export const ActionSaveRouteResult = (res) => {
    return {
        type: actionTypes.ROUTE,
        routeResult : res.Result.TimeResult.results
    }
}