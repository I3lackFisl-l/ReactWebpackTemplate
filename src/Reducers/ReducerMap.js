import * as actionTypes from '../Constants/ActionTypes'

const initialState = {mapCenter: null}

export default (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.SET_CENTER :
            return {...state, mapCenter : {lat : action.lat, long : action.long}}
        default :
            return state
    }
}

