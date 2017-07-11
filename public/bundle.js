/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Action dispatched when a set time is requested
 * @param {string} id - The id of the clock
 * @param {number} timeEnd - The timestamp of when the clock will end
 * @param {number} seconds - The seconds inputted for the time end
 */
function endTimeAction() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var timeEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var seconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return {
        type: 'END_TIME_ACTION',
        payload: {
            id: id,
            timeEnd: timeEnd,
            seconds: seconds
        }
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
            id: id,
            timeRemaining: timeRemaining
        }
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
            id: id,
            timer: timer
        }
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
            id: id
        }
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
            id: id
        }
    };
}

module.exports = {
    setTimerAction: setTimerAction,
    endTimeAction: endTimeAction,
    timeRemainingAction: timeRemainingAction,
    timerStoppedAction: timerStoppedAction,
    timerFinishedAction: timerFinishedAction
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , core      = __webpack_require__(1)
  , ctx       = __webpack_require__(31)
  , hide      = __webpack_require__(35)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The template representing a clock
 * @param {object} state - The current state of the application
 * @param {string} id - The id of the clock
 */
function template(state, _ref) {
    var id = _ref.id;

    var clock = state[id];
    return '<div class="days number">\n                <span>' + clock.days + '</span>\n            </div>\n            <div class="hours number">\n                <span>' + clock.hours + '</span>\n            </div>\n            <div class="minutes number">\n                <span>' + clock.minutes + '</span>\n            </div>\n            <div class="seconds number">\n                <span>' + clock.seconds + '</span>\n            </div>\n            <button data-started=\'' + clock.started + '\'>' + clock.started + '</button>';
}

/**
 * A eventHandler for when the start/stop/restart button is clicked
 * @param {object} e - The event that was triggered
 * @param {object} store - The application state and state management methods
 * @param {string} id - The id of the clock
 * @param {object} time - A collection of time methods that allow for interaction with the clocks
 */
function startStopClock(e, store, id, time) {
    if (e.target.dataset['started'] === 'Start') {
        time.startClock(id, store);
    } else if (e.target.dataset['started'] === 'Restart') {
        time.restartClock(id, store);
    } else {
        time.stopClock(id, store);
    }
}

/**
 * Attaches the clock component events to the dom
 * @param {object} store - The application state and state management methods
 * @param {string} id - The id of the clock
 */
function bindEvents(store, _ref2) {
    var id = _ref2.id,
        time = _ref2.time;

    var templateLocation = id;
    document.querySelector('#' + templateLocation + ' button').addEventListener('click', function (e) {
        return startStopClock(e, store, id, time);
    });
}

module.exports = {
    template: template,
    bindEvents: bindEvents
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* A simple render function limiting dom mutations to a single place in the application
* @param {Object} component - The component with a template and events, to be rendered.
* @param {Object} store - The vimeoStore containing the state of the app
*/
function render(component, store) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var templateString = component.template(store.getState().clocks, opts);
    document.querySelector("#" + opts.id).innerHTML = templateString;
    component.bindEvents(store, opts);
}

module.exports = {
    render: render
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(28)
  , IE8_DOM_DEFINE = __webpack_require__(36)
  , toPrimitive    = __webpack_require__(47)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(39)
  , enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(11)
  , defined = __webpack_require__(10);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(10);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initialState = {
    clocks: {
        clock1: {
            id: 'clock1',
            minutes: 0,
            seconds: 0,
            hours: 0,
            days: 0,
            started: 'Restart',
            setTime: 90
        },
        clock2: {
            id: 'clock2',
            minutes: 0,
            seconds: 0,
            hours: 0,
            days: 0,
            started: 'Restart',
            setTime: 900
        },
        clock3: {
            id: 'clock3',
            minutes: 0,
            seconds: 0,
            hours: 0,
            days: 0,
            started: 'Restart',
            setTime: 9000
        },
        clock4: {
            id: 'clock4',
            minutes: 0,
            seconds: 0,
            hours: 0,
            days: 0,
            started: 'Restart',
            setTime: 90000
        },
        clock5: {
            id: 'clock5',
            minutes: 0,
            seconds: 0,
            hours: 0,
            days: 0,
            started: 'Restart',
            setTime: 9
        },
        clock6: {
            id: 'clock6',
            minutes: 0,
            seconds: 0,
            hours: 0,
            days: 0,
            started: 'Restart',
            setTime: 90
        }
    }
};

module.exports = {
    initialState: initialState
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(23);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Updates the apps state based on the type of update that just occured.
 * @param {Object} state - The apps current state
 * @param {Object} update - The update describing the change to the state
 */
function updateClocks(state, update) {
    if (update.type === 'END_TIME_ACTION') {
        return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, update.payload.id, (0, _assign2.default)({}, state[update.payload.id], {
            timeEnd: update.payload.timeEnd,
            setTime: update.payload.seconds
        })));
    } else if (update.type === 'SET_TIMER_ACTION') {
        return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, update.payload.id, (0, _assign2.default)({}, state[update.payload.id], {
            timer: update.payload.timer
        })));
    } else if (update.type === 'TIME_REMAINING_ACTION') {
        return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, update.payload.id, (0, _assign2.default)({}, state[update.payload.id], update.payload.timeRemaining)));
    } else if (update.type === 'TIMER_STOPPED_ACTION') {
        return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, update.payload.id, (0, _assign2.default)({}, state[update.payload.id], {
            started: 'Start'
        })));
    } else if (update.type === 'TIMER_FINISHED_ACTION') {
        return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, update.payload.id, (0, _assign2.default)({}, state[update.payload.id], {
            started: 'Restart'
        })));
    }

    return state;
}
/**
 * Update all of the state
 * @param {Object} state - The current state of the app
 * @param {Object} update - The description of the state change
 */
function determineStateChange(state, update) {
    return (0, _assign2.default)({}, {
        clocks: updateClocks(state.clocks, update)
    });
}

/**
 * Maps over all subscribed callbacks and executes them
 * @param {Array} subscribers - A list of callback fns
 */
function notifySubscribers(subscribers) {
    subscribers.map(function (subscriber) {
        return subscriber();
    });
}

/**
 * Creates a new store object
 * @param {Object} initialState - State used to hydrate the store
 * @param {Object} options - Addional data to be attached to the store
 */
function store() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments[1];

    var state = initialState;
    var subscribers = [];
    return (0, _assign2.default)({}, options, {
        getState: function getState() {
            return (0, _assign2.default)({}, state);
        },
        updateState: function updateState(update) {
            state = determineStateChange(state, update);
            notifySubscribers(subscribers);
        },
        subscribe: function subscribe(subscriber) {
            return subscribers.push(subscriber);
        }
    });
}

module.exports = {
    store: store,
    determineStateChange: determineStateChange,
    updateClocks: updateClocks
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeRemainingAction = __webpack_require__(0).timeRemainingAction;
var setTimerAction = __webpack_require__(0).setTimerAction;
var render = __webpack_require__(8).render;
var clockComponent = __webpack_require__(7);
var endTimeAction = __webpack_require__(0).endTimeAction;
var timerStoppedAction = __webpack_require__(0).timerStoppedAction;
var timerFinishedAction = __webpack_require__(0).timerFinishedAction;

/**
 * Determines the time remaining based on the current time and the end time and breaks values into seconds/minutes/hours/days
 * @param {Date} endTime 
 */
function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / (1000 * 60 * 60) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds,
        'hours': hours,
        'days': days,
        'started': 'Stop'
    };
}

/**
 * Sets up an interval to continually update the clock until the interval is cleared
 * @param {string} id - The id of the clock
 * @param {Object} store - The application state and state management methods
 */
function initializeClock(id, store) {
    var clock = store.getState().clocks[id];
    var timeinterval = setInterval(function () {
        var timeRemaining = getTimeRemaining(clock.timeEnd);
        store.updateState(timeRemainingAction(id, timeRemaining));
        clock = store.getState().clocks[id];
        render(clockComponent, store, { id: id, time: { startClock: startClock, stopClock: stopClock, setClock: setClock, restartClock: restartClock } });
        if (clock.total <= 0) {
            clearInterval(timeinterval);
            store.updateState(timerFinishedAction(id));
            render(clockComponent, store, { id: id, time: { startClock: startClock, stopClock: stopClock, setClock: setClock, restartClock: restartClock } });
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
    return new Date(timeObject.getTime() + seconds * 1000);
}

/**
 * Stops the clock at its current time
 * @param {string} id - The id of the clock
 * @param {object} store - The application state and state management methods
 */
function stopClock() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var store = arguments[1];

    var clock = (0, _assign2.default)({}, store.getState().clocks[id]);
    if (id) {
        clearInterval(clock['timer']);
        store.updateState(timerStoppedAction(id));
        render(clockComponent, store, { id: id, time: { startClock: startClock, stopClock: stopClock, setClock: setClock, restartClock: restartClock } });
    } else {
        console.log('Please enter an id of a clock');
    }
}

/**
 * Re-its the clocks interval
 * @param {string} id - The id of the clock
 * @param {object} store - The application state and state management methods
 */
function startClock() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var store = arguments[1];

    var clock = (0, _assign2.default)({}, store.getState().clocks[id]);
    var timeEnd = getEndTime(clock.minutes * 60 + clock.seconds);
    store.updateState(endTimeAction(id, timeEnd));
    if (id) {
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
    if (id && seconds) {
        var timeEnd = getEndTime(seconds);
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
    var setTime = store.getState().clocks[id].setTime;
    setClock(id, setTime, store);
}

module.exports = {
    getEndTime: getEndTime,
    getTimeRemaining: getTimeRemaining,
    initializeClock: initializeClock,
    startClock: startClock,
    stopClock: stopClock,
    setClock: setClock,
    restartClock: restartClock
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(26), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(20);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = __webpack_require__(18).store;
var initialState = __webpack_require__(17).initialState;
var time = __webpack_require__(19);
var render = __webpack_require__(8).render;
var clockComponent = __webpack_require__(7);

var clockStore = store(initialState);

//Do the initial render of the clocks
(0, _keys2.default)(clockStore.getState().clocks).map(function (id) {
    return render(clockComponent, clockStore, {
        id: id,
        time: {
            startClock: time.startClock,
            stopClock: time.stopClock,
            setClock: time.setClock,
            restartClock: time.restartClock
        }
    });
});

var clockApp = function clockApp() {
    return {
        stopClock: function stopClock(id) {
            return time.stopClock(id, clockStore);
        },
        startClock: function startClock(id) {
            return time.startClock(id, clockStore);
        },
        setClock: function setClock(id, seconds) {
            return time.setClock(id, seconds, clockStore);
        },
        restartClock: function restartClock(id) {
            return time.restartClock(id, clockStore);
        }
    };
};

window.clockApp = clockApp();

console.log('\nYou can modify the clocks from the console using clockApp\n\nTo update the clocks from the counter there are three available options, all of them require the id of the clock to be updated. The id values range from clock1 -> clock6: \n1. setClock(id, seconds) - Sets and starts a clock with the specified amount of seconds\n2. startClock(id) - Starts a clock that is currently stopped\n3. stopClock(id) - Stops a clock that is currently started\n4. restartClock(id) - Restarts the clock\n');

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(22);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
module.exports = __webpack_require__(1).Object.assign;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
module.exports = __webpack_require__(1).Object.keys;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15)
  , toLength  = __webpack_require__(46)
  , toIndex   = __webpack_require__(45);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(27);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6)
  , document = __webpack_require__(5).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(12)
  , createDesc = __webpack_require__(42);
module.exports = __webpack_require__(2) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function(){
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(13)
  , gOPS     = __webpack_require__(38)
  , pIE      = __webpack_require__(40)
  , toObject = __webpack_require__(16)
  , IObject  = __webpack_require__(11)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(34)
  , toIObject    = __webpack_require__(15)
  , arrayIndexOf = __webpack_require__(29)(false)
  , IE_PROTO     = __webpack_require__(43)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4)
  , core    = __webpack_require__(1)
  , fails   = __webpack_require__(3);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(44)('keys')
  , uid    = __webpack_require__(48);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(37)});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(16)
  , $keys    = __webpack_require__(13);

__webpack_require__(41)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ })
/******/ ]);