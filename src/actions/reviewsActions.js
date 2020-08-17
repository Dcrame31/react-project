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