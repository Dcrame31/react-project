import { combineReducers } from 'redux';
import manageCampgrounds from './manageCampgrounds';
import manageLocations from './manageLocations';

const rootReducer = combineReducers({
    manageCampgrounds,
    manageLocations
})

export default rootReducer;