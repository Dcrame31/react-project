// import { history } from '../history';

// export const fetchCampgrounds = () => {
//     return dispatch => {
//         dispatch({ type: 'CAMPGROUNDS_LOADING' })
//         fetch("http://localhost:3001/campgrounds")
//             .then(res => {
//                 return res.json()
//             })
//             .then(data => {
//                 dispatch({ type: 'LOAD_CAMPGROUNDS', payload: data })
//             })
//     }
// }

export const fetchCampgrounds = (id) => {
    const searchTerm = parseInt(id)
    const fetchUrl = searchTerm ? `http://localhost:3001/locations/${searchTerm}` : 'http://localhost:3001/campgrounds'
    return dispatch => {
        dispatch({ type: 'CAMPGROUNDS_LOADING' })
        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => dispatch({ type: 'CAMPGROUNDS_LOADED', payload: data.campgrounds || data }))
    }
}

export const fetchCampground = id => {
    return dispatch => {
        dispatch({ type: 'CAMPGROUND_LOADING' })
        fetch(`http://localhost:3001/campgrounds/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'CAMPGROUND_LOADED', payload: data })
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

export const addCampground = (campground) => {
    console.log('b')
    return dispatch => {
        console.log('c')
        dispatch({ type: 'CAMPGROUND_ADDING' })
        return fetch("http://localhost:3001/campgrounds", {
            method: "POST",
            body: JSON.stringify(campground),
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('d')
                return dispatch({ type: 'CAMPGROUND_ADDED', payload: data })
            })
        console.log('e')
    }
    console.log('f')
}

export const editCampground = (id, data, onEditSuccess) => {
    return dispatch => {
        dispatch({ type: 'EDITING_CAMPGROUND' })
        fetch(`http://localhost:3001/campgrounds/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(campground => dispatch({ type: 'EDIT_CAMPGROUND', payload: campground }))
            .then(onEditSuccess)
    }
}

export const deleteCampground = (id, onDeleteSuccess) => {
    return dispatch => {
        dispatch({ type: 'DELETING_CAMPGROUND' })
        fetch(`http://localhost:3001/campgrounds/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => dispatch({ type: 'CAMPGROUND_DELETED', payload: id }))
            .then(onDeleteSuccess)
    }
}