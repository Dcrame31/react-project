import { combineReducers } from 'redux';
import manageCampgrounds from './manageCampgrounds';
import manageLocations from './manageLocations';
import manageReviews from './manageReviews';

const rootReducer = combineReducers({
    manageCampgrounds,
    manageLocations,
    manageReviews
})

export default rootReducer;