import React from 'react'

export const fetchCampgrounds = () => {
    return (dispatch)
    dispatch({ type: 'LOADING_CAMPGROUNDS' })
    fetch("http://localhost:3000/campgrounds")
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'ADD_CAMPGROUND', campground: data })
        })
}

