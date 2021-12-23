import {
    combineReducers
} from 'redux';
import sessionReducer from './session_reducer';
import eventsReducer from './events_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    events: eventsReducer
});

export default RootReducer;