export const fetchReviews = id => {
    return dispatch => {
        dispatch({ type: 'REVIEWS_LOADING' })
        fetch(`http://localhost:3001/campgrounds/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'REVIEWS_LOADED', payload: data.reviews })
            })
    }
}

export const addReview = () => {
    return dispatch => {
        dispatch({ type: 'REVIEW_ADDING' })
        fetch("http://localhost:3001/reviews")
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'REVIEW_ADDED', payload: data })
            })
    }
}