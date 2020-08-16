// import React from 'react'
import { v1 as uuid } from 'uuid';

export default function manageCampgrounds(state = {
    campgrounds: [],
    campgroundInfo: null,
    loading: false
}, action) {
    switch (action.type) {
        case 'CAMPGROUNDS_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CAMPGROUNDS_LOADED':
            return {
                ...state,
                campgrounds: action.payload,
                loading: false
            }
        case 'CAMPGROUND_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CAMPGROUND_LOADED':
            return {
                ...state,
                campgroundInfo: action.payload,
                loading: false
            }
        case 'CAMPGROUND_ADDING':
            return {
                ...state,
                loading: true
            }
        case 'CAMPGROUND_ADDED':
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
                campgrounds: [...state.campgrounds, action.payload],
                loading: false
            }
        case 'CAMPGROUND_EDITING':
            return {
                ...state,
                loading: true
            }
        case 'CAMPGROUND_EDITED':
            return {
                ...state,
                campgrounds: [...state.campgrounds, action.payload],
                loading: false
            }
        case 'CAMPGROUND_DELETING':
            return {
                ...state,
                loading: true
            }
        case 'CAMPGROUND_DELETED':
            return {
                ...state,
                campgrounds: [...state.campgrounds.filter(campground => `${campground.id}` !== action.payload)],
                loading: false
            }
        default:
            return state;
    }
}

