const moment = require('moment');

function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds,
    };
}

function initializeClock(clock) {
    var clockEl = document.getElementById(clock.id);
    var timeinterval = setInterval(() => {
        clock = Object.assign(clock, getTimeRemaining(clock.endTime));
        clockEl.innerHTML = 
            `minutes: ${clock.minutes} <br>seconds: ${clock.seconds}`;
        if (clock.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
    return timeinterval;
}

function getEndTime(seconds) {
    return moment().add(seconds, 'seconds');
}

const clockApp = () => {
    let clocks = {
        clock1: {
            id: 'clock1',
            stop: true,
            minutes: 0,
            seconds: 0,
        },
        clock2: {
            id: 'clock2',
            stop: true,
            minutes: 0,
            seconds: 0,
        },
        clock3: {
            id: 'clock3',
            stop: true,
            minutes: 0,
            seconds: 0,
        },
        clock4: {
            id: 'clock4',
            stop: true,
            minutes: 0,
            seconds: 0,
        },
        clock5: {
            id: 'clock5',
            stop: true,
            minutes: 0,
            seconds: 0,
        },
        clock6: {
            id: 'clock6',
            stop: true,
            minutes: 0,
            seconds: 0,
        },
    };

    return {
        stopClock: (id) => {
            if(id) {
                clearInterval(clocks[id]['timer']);
            } else {
                console.log('Please enter an id of a clock');
            }
            return this;
        },
        startClock: (id = '') => {
            clocks[id]['endTime'] = getEndTime((clocks[id].minutes*60) + clocks[id].seconds);
            if(id) {
                clocks[id]['timer'] = initializeClock(clocks[id]);
            } else {
                console.log('Please enter the id of a clock');
            }
            return this;
        },
        setClock: (id, seconds) => {
            if(id && seconds) {
                clocks[id]['endTime'] = getEndTime(seconds);
                clocks[id]['timer'] = initializeClock(clocks[id]);
            } else {
                console.log('Please enter a clock id and the time in seconds for the timer');
            }
            return this;
        },
    };
};

window.clockApp = clockApp();
