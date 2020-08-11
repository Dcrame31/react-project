import { combineReducers } from 'redux';
import manageCampgrounds from './manageCampgrounds';
import manageLocations from './manageLocations';

export default combineReducers({
    manageCampgrounds,
    manageLocations
})
