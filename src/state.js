/**
 * Updates the apps state based on the type of update that just occured.
 * @param {Object} state - The apps current state
 * @param {Object} update - The update describing the change to the state
 */
function updateClocks(state, update) {
    if(update.type === 'END_TIME_ACTION') {
        return Object.assign({}, state, {
            [update.payload.id]: Object.assign({}, state[update.payload.id], {
                timeEnd: update.payload.timeEnd,
                setTime: update.payload.seconds,
            }),
        });
    } 
    else if(update.type === 'SET_TIMER_ACTION') {
        return Object.assign({}, state, {
            [update.payload.id]: Object.assign({}, state[update.payload.id], {
                timer: update.payload.timer,
            }),
        });
    }
    else if(update.type === 'TIME_REMAINING_ACTION') {
        return Object.assign({}, state, {
            [update.payload.id]: Object.assign({}, state[update.payload.id], update.payload.timeRemaining),
        });
    }
    else if(update.type === 'TIMER_STOPPED_ACTION') {
        return Object.assign({}, state, {
            [update.payload.id]: Object.assign({}, state[update.payload.id], {
                started: 'Start',
            }),
        });
    }
    else if(update.type === 'TIMER_FINISHED_ACTION') {
        return Object.assign({}, state, {
            [update.payload.id]: Object.assign({}, state[update.payload.id], {
                started: 'Restart',
            }),
        });
    }

    return state;
}
/**
 * Update all of the state
 * @param {Object} state - The current state of the app
 * @param {Object} update - The description of the state change
 */
function determineStateChange(state, update) {
    return Object.assign({}, {
        clocks: updateClocks(state.clocks, update),
    });
}

/**
 * Maps over all subscribed callbacks and executes them
 * @param {Array} subscribers - A list of callback fns
 */
function notifySubscribers(subscribers) {
    subscribers.map((subscriber) => subscriber());
}

/**
 * Creates a new store object
 * @param {Object} initialState - State used to hydrate the store
 * @param {Object} options - Addional data to be attached to the store
 */
function store(initialState = {}, options) {
    let state = initialState;
    let subscribers = [];
    return Object.assign({}, options, {
        getState: () => Object.assign({}, state),
        updateState: (update) => {
            state = determineStateChange(state, update);
            notifySubscribers(subscribers);
        },
        subscribe: (subscriber) => subscribers.push(subscriber),
    });
}

module.exports = {
    store,
    determineStateChange,
    updateClocks,
};
