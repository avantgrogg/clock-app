const assert = require('chai').assert;
const time = require('../src/time');

describe('Tests for the state functions', () => {
    describe('getTimeRemaining tests', () => {
        it('endTime is less than the current time should return empty object', () => {
            const endTime = 1;
            const actual = time.getTimeRemaining(endTime);

            assert.isEmpty(actual);
        });

        it('endtime is greater than the current time should return an object with time components', () => {
            const endTime = new Date(new Date().getTime() + 10*1000);
            const actual = time.getTimeRemaining(endTime);

            assert.containsAllKeys(actual, ['hours', 'minutes', 'seconds', 'days']);
        })
    });

    describe('getEndTime tests', () => {
        it('it should return a timestamp with the seconds added', () => {
            const seconds = 10;
            const actual = time.getEndTime(10);
            const expected = new Date(new Date().getTime() + seconds*1000);

            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    });
});