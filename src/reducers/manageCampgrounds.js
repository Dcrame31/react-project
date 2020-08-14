// import React from 'react'
import { v1 as uuid } from 'uuid';

export default function manageCampgrounds(state = {
    campgrounds: []
}, action) {
    switch (action.type) {
        case 'LOADING_CAMPGROUNDS':
            return {
                ...state,
                campgrounds: [...state.campgrounds]
            }
        case 'LOAD_CAMPGROUNDS':
            return {
                ...state,
                campgrounds: action.payload
            }
        case 'ADD_CAMPGROUND':
            const campground = {
                name: action.campground.name,
                description: action.campground.description,
                location_id: action.campground.locationId,
                id: uuid()
            };

            return {
                ...state,
                campground: [...state.campgrounds, campground]
            }
        case 'DELETE_CAMPGROUND':
            return {
                ...state,
                reviews: state.campgrounds.filter(campground => campground.id !== action.id)
            }
        default:
            return state;
    }
}

