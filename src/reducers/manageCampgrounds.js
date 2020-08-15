// import React from 'react'
import { v1 as uuid } from 'uuid';

export default function manageCampgrounds(state = {
    campgrounds: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_CAMPGROUNDS':
            return {
                ...state,
                campgrounds: [...state.campgrounds],
                loading: true
            }
        case 'LOAD_CAMPGROUNDS':
            return {
                ...state,
                campgrounds: action.payload,
                loading: false
            }
        case 'LOADING_CAMPGROUND':
            return {
                ...state,
                campgrounds: action.payload,
                loading: true
            }
        case 'LOAD_CAMPGROUND':
            return {
                ...state,
                campgrounds: action.payload,
                loading: false
            }
        case 'ADDING_CAMPGROUND':
            return {
                ...state,
                campgrounds: [...state.campgrounds],
                loading: true
            }
        case 'ADD_CAMPGROUND':
            const campground = {
                name: action.campground.name,
                description: action.campground.description,
                location_id: action.campground.locationId,
                cost: action.campground.cost,
                link: action.campground.link,
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

