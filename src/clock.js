/**
 * The template representing a clock
 * @param {object} state - The current state of the application
 * @param {string} id - The id of the clock
 */
function template(state, {id}) {
    const clock = state[id];
    return `<div class="days number">
                <span>${clock.days}</span>
            </div>
            <div class="hours number">
                <span>${clock.hours}</span>
            </div>
            <div class="minutes number">
                <span>${clock.minutes}</span>
            </div>
            <div class="seconds number">
                <span>${clock.seconds}</span>
            </div>
            <button data-started='${clock.started}'>${clock.started}</button>`;
}

/**
 * A eventHandler for when the start/stop/restart button is clicked
 * @param {object} e - The event that was triggered
 * @param {object} store - The application state and state management methods
 * @param {string} id - The id of the clock
 * @param {object} time - A collection of time methods that allow for interaction with the clocks
 */
function startStopClock(e, store, id, time) {
    if(e.target.dataset['started'] === 'Start') {
        time.startClock(id, store);
    } 
    else if(e.target.dataset['started'] === 'Restart') {
        time.restartClock(id, store);
    }
    else {
        time.stopClock(id, store);
    }
}

/**
 * Attaches the clock component events to the dom
 * @param {object} store - The application state and state management methods
 * @param {string} id - The id of the clock
 */
function bindEvents(store, {id, time}) {
    const templateLocation = id;
    document.querySelector(`#${templateLocation} button`).addEventListener('click', (e) => startStopClock(e, store, id, time));
}

module.exports = {
    template: template,
    bindEvents: bindEvents,
};
