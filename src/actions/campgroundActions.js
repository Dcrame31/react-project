
export const fetchCampgrounds = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_CAMPGROUNDS' })
        fetch("http://localhost:3001/campgrounds")
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({ type: 'LOAD_CAMPGROUNDS', payload: data })
            })
    }
}

export const fetchCampground = id => {
    return dispatch => {
        dispatch({ type: 'LOADING_CAMPGROUND' })
        fetch(`http://localhost:3001/campgrounds/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'LOAD_CAMPGROUND', payload: data })
            })
    }
}

export const fetchFilteredCampgrounds = id => {
    return dispatch => {
        dispatch({ type: 'FILTER_CAMPGROUNDS', id: id })
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

export const fetchLocation = id => {
    return dispatch => {
        dispatch({ type: 'LOADING_LOCATION' })
        fetch(`http://localhost:3001/locations/${id}`)
            .then(res => res.json())
            .then(data => {
                return dispatch({ type: 'LOAD_LOCATION', payload: data })
            })
    }
}