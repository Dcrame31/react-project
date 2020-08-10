import { combineReducers } from 'redux';
import manageCampgrounds from './manageCampgrounds';
import manageLocations from './manageLocations';

export default rootReducer({
    manageCampgrounds,
    manageLocations
})
