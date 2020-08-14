// import React from 'react'

export default function manageLocations(state = {
    locations: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_LOCATIONS':
            return {
                ...state,
                loading: true
            }
        case 'LOAD_LOCATIONS':
            return {
                ...state,
                locations: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
