export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const EVENT_ERROR = "EVENT_ERROR";

export const receiveEvents = (events) => {
    return {
        type: RECEIVE_EVENTS,
        events
    }
}

export const receiveEvent = (singleEvent) => ({
    type: RECEIVE_EVENT,
    singleEvent
})

export const removeEvent = (singleEvent) => ({
    type: REMOVE_EVENT,
    singleEvent
})

export const eventError = (error) => ({
    type: EVENT_ERROR,
    error
})