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
                name: action.payload.name,
                description: action.payload.description,
                location_id: action.payload.location_id,
                cost: action.payload.cost,
                link: action.payload.link,
                id: uuid()
            };

            return {
                ...state,
                campgrounds: [...state.campgrounds, campground]
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

