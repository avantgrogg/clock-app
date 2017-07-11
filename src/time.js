const timeRemainingAction = require('./actions').timeRemainingAction;
const setTimerAction = require('./actions').setTimerAction;
const render = require('./render').render;
const clockComponent = require('./clock');
const endTimeAction = require('./actions').endTimeAction;
const timerStoppedAction = require('./actions').timerStoppedAction;
const timerFinishedAction = require('./actions').timerFinishedAction;

/**
 * Determines the time remaining based on the current time and the end time and breaks values into seconds/minutes/hours/days
 * @param {Date} endTime 
 */
function getTimeRemaining(endTime) {
    if(Date.parse(endTime) < Date.parse(new Date())) {
        return {};
    }
    const t = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds,
        'hours': hours,
        'days': days,
        'started': 'Stop',
    };
}

/**
 * Sets up an interval to continually update the clock until the interval is cleared
 * @param {string} id - The id of the clock
 * @param {Object} store - The application state and state management methods
 */
function initializeClock(id, store) {
    let clock = store.getState().clocks[id];
    const timeinterval = setInterval(() => {
        const timeRemaining = getTimeRemaining(clock.timeEnd);
        store.updateState(timeRemainingAction(id, timeRemaining));
        clock = store.getState().clocks[id];
        render(clockComponent, store, {id: id, time: {startClock, stopClock, setClock, restartClock}});
        if (clock.total <= 0) {
            clearInterval(timeinterval);
            store.updateState(timerFinishedAction(id));
            render(clockComponent, store, {id: id, time: {startClock, stopClock, setClock, restartClock}});
        }
    }, 1000);
    store.updateState(setTimerAction(id, timeinterval));
}

/**
 * Determines the end time fot the timer based on the inputed amount of seconds
 * @param {number} seconds 
 */
function getEndTime(seconds) {
    var timeObject = new Date();
    return new Date(timeObject.getTime() + seconds*1000);
}

/**
 * Stops the clock at its current time
 * @param {string} id - The id of the clock
 * @param {object} store - The application state and state management methods
 */
function stopClock(id = '', store) {
    const clock = Object.assign({}, store.getState().clocks[id]);
    if(id) {
        clearInterval(clock['timer']);
        store.updateState(timerStoppedAction(id));
        render(clockComponent, store, {id: id, time: {startClock, stopClock, setClock, restartClock}});
    } else {
        console.log('Please enter an id of a clock');
    }
}

/**
 * Re-its the clocks interval
 * @param {string} id - The id of the clock
 * @param {object} store - The application state and state management methods
 */
function startClock(id = '', store) {
    const clock = Object.assign({}, store.getState().clocks[id]);
    const timeEnd = getEndTime((clock.minutes*60) + clock.seconds);
    store.updateState(endTimeAction(id, timeEnd));
    if(id) {
        initializeClock(id, store);
    } else {
        console.log('Please enter the id of a clock');
    }
}

/**
 * Determines the clocks endTime based on input then initializes the clock
 * @param {string} id - The id of the clock
 * @param {number} seconds - The inputed amount of time for the timer
 * @param {object} store - The application state and state management methods
 */
function setClock(id, seconds, store) {
    if(id && seconds) {
        const timeEnd = getEndTime(seconds);
        store.updateState(endTimeAction(id, timeEnd, seconds));
        initializeClock(id, store);
    } else {
        console.log('Please enter a clock id and the time in seconds for the timer');
    }
}

/**
 * Sets the clock based on the stored set time, used for the previous set clock
 * @param {string} id - The id of the clock
 * @param {object} store - The application state and state management methods
 */
function restartClock(id, store) {
    const setTime = store.getState().clocks[id].setTime;
    setClock(id, setTime, store);
}


module.exports = {
    getEndTime,
    getTimeRemaining,
    initializeClock,
    startClock,
    stopClock,
    setClock,
    restartClock,
};
