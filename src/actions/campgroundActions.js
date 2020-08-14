
export const fetchCampgrounds = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_CAMPGROUNDS' })
        fetch("http://localhost:3001/campgrounds")
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({ type: 'LOAD_CAMPGROUND', campground: data })
            })
    }
}

export const fetchLocations = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_LOCATIONS' })
        fetch("http://localhost:3001/locations")
            .then(res => res.json())
            .then(data => {
                return dispatch({ type: 'LOAD_LOCATIONS', payload: data })
            })
    }
}
