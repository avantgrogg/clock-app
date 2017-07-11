/**
 * Action dispatched when a set time is requested
 * @param {string} id - The id of the clock
 * @param {number} timeEnd - The timestamp of when the clock will end
 * @param {number} seconds - The seconds inputted for the time end
 */
function endTimeAction(id = '', timeEnd = '', seconds = '') {
    return {
        type: 'END_TIME_ACTION',
        payload: {
            id,
            timeEnd,
            seconds,
        },
    };
}

/**
 * Action dispatched every interval to update the current values of the shown clock
 * @param {*} id - The id of the clock
 * @param {*} timeRemaining - The amount of time until the clock ends
 */
function timeRemainingAction(id, timeRemaining) {
    return {
        type: 'TIME_REMAINING_ACTION',
        payload: {
            id,
            timeRemaining,
        },
    };
}

/**
 * Action dispatched when a timer value has been set for the clock
 * @param {*} id - The id of the clock
 * @param {*} timer - A numerical representation of the setInterval process, used by clearInterval
 */
function setTimerAction(id, timer) {
    return {
        type: 'SET_TIMER_ACTION',
        payload: {
            id,
            timer,
        },
    };
}

/**
 * Action dispatched when the clock is requested to stop
 * @param {*} id - The id of the clock
 */
function timerStoppedAction(id) {
    return {
        type: 'TIMER_STOPPED_ACTION',
        payload: {
            id,
        },
    };
}

/**
 * Action dispatched when the clock has finished
 * @param {*} id - The id of the clock
 */
function timerFinishedAction(id) {
    return {
        type: 'TIMER_FINISHED_ACTION',
        payload: {
            id,
        },
    };
}

module.exports = {
    setTimerAction,
    endTimeAction,
    timeRemainingAction,
    timerStoppedAction,
    timerFinishedAction,
};
