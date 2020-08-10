// import React from 'react'
import { v1 as uuid } from 'uuid';

export default function manageCampgrounds(state = {
    campgrounds: []
}, action) {
    switch (action.type) {
        case 'LOADING_CAMPGROUNDS':
            return {

            }
        case 'ADD_CAMPGROUND':
            const campground = { name: action.name, id: uuid() };

            return {
                ...state,
                campground: [...state.campgrounds, campground]
            }
        default:
            return state;
    }
}

