import React from 'react'

export default function manageLocations(state = {
    locations: []
}, action) {
    switch (action.type) {
        case 'LOADING_LOCATIONS':
            return {
                ...state,
                locations: [...state.locations]
            }
        case 'LOAD_LOCATIONS':
            return {
                ...state,
                locations: action.locations
            }
        default:
            return state;
    }
}
