import React from 'react'

export default function manageReviews(state = {
    reviews: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'REVIEWS_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'REVIEWS_LOADED':
            return {
                ...state,
                reviews: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
