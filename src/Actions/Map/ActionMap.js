import * as actionTypes from '../../Constants/ActionTypes'

export const ActionSetCenterMap = (lat, long) => {
    return {
        type: actionTypes.SET_CENTER,
        lat, long
    }
}