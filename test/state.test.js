const assert = require('chai').assert;
const state = require('../src/state');

describe('Tests for the state functions', () => {
    describe('updateClocks tests', () => {
        it('should change the value of started to Restart if type is TIMER_FINISHED_ACTION', () => {
            const mockState = {
                clock1: {
                    started: 'Stop',
                },
            };

            const expectedState = {
                clock1: {
                    started: 'Restart',
                },
            };

            const update = {
                type: 'TIMER_FINISHED_ACTION',
                payload: {
                    id: 'clock1',
                },
            };

            const actual = state.updateClocks(mockState, update);
            assert.deepEqual(expectedState, actual);
        });

        it('should update the timeEnd and setTime if the type is END_TIME_ACTION', () => {
            const mockState = {
                clock1: {
                    timeEnd: 1,
                    setTime: 1,
                },
            };

            const expectedState = {
                clock1: {
                    timeEnd: 10,
                    setTime: 10,
                },
            };

            const update = {
                type: 'END_TIME_ACTION',
                payload: {
                    id: 'clock1',
                    timeEnd: 10,
                    seconds: 10,
                },
            };

            const actual = state.updateClocks(mockState, update);
            assert.deepEqual(expectedState, actual);
        });
    });

    describe('determineStateChange tests', () => {
        it('it should return a new state even if the state does not change', () => {
            const mockState = {
                clocks: {
                    clock1: {},
                },
            };

            const update = {};

            const actual = state.determineStateChange(mockState, update);
            const expected = mockState;

            assert.notEqual(actual, expected);
            assert.deepEqual(actual, expected);
        });
    });
});
