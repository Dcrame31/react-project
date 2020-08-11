
export const fetchCampgrounds = () => {
    return (dispatch)
    dispatch({ type: 'LOADING_CAMPGROUNDS' })
    fetch("http://localhost:3000/campgrounds")
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'LOAD_CAMPGROUND', campground: data })
        })
}

export const fetchLocations = () => {
    return (dispatch)
    dispatch({ type: 'LOADING_LOCATIONS' })
    fetch("http://localhost:3000/locations")
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'LOAD_LOCATION', location: data })
        })
}
