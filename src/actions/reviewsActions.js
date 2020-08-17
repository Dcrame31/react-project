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

export const addReview = (review) => {
    return dispatch => {
        dispatch({ type: 'REVIEW_ADDING' })
        return fetch(`http://localhost:3001/reviews`, {
            method: "POST",
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => dispatch({ type: 'REVIEW_ADDED', payload: data }))
    }
}