import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT,
    EVENT_ERROR
} from "../actions/event_actions";

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_EVENTS:
            action.events.forEach((singleEvent) => {
                nextState[singleEvent.id] = singleEvent;
            });
            return nextState;
        case RECEIVE_EVENT:
            const newEvent = {
                [action.singleEvent.id]: action.singleEvent
            };
            return Object.assign({}, state, newEvent);
        case REMOVE_EVENT:
            nextState = Object.assign({}, state);
            delete nextState[action.singleEvent.id];
            return nextState;
        case EVENT_ERROR:
            alert(action.error);
        default:
            return state;
    }
}

export default eventsReducer;