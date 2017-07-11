const store = require('./state').store;
const initialState = require('./config').initialState;
const time = require('./time');
const render = require('./render').render;
const clockComponent = require('./clock');

const clockStore = store(initialState);

//Do the initial render of the clocks
Object.keys(clockStore.getState().clocks).map((id) => render(clockComponent, clockStore, {
    id: id, 
    time: {
        startClock: time.startClock, 
        stopClock: time.stopClock, 
        setClock: time.setClock,
        restartClock: time.restartClock,
    },
}));

const clockApp = () => {
    return {
        stopClock: (id) => time.stopClock(id, clockStore),
        startClock: (id) => time.startClock(id, clockStore),
        setClock: (id, seconds) => time.setClock(id, seconds, clockStore),
        restartClock: (id) => time.restartClock(id, clockStore),
    };
};

window.clockApp = clockApp();

console.log(`
You can modify the clocks from the console using clockApp

To update the clocks from the counter there are three available options, all of them require the id of the clock to be updated. The id values range from clock1 -> clock6: 
1. setClock(id, seconds) - Sets and starts a clock with the specified amount of seconds
2. startClock(id) - Starts a clock that is currently stopped
3. stopClock(id) - Stops a clock that is currently started
4. restartClock(id) - Restarts the clock
`);
