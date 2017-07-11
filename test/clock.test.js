const assert = require('chai').assert;
const template = require('../src/clock').template;

describe('Template test', () => {
    const mockState = {
        'clock1': {
            days:'',
            hours:'',
            minutes:'',
            seconds:'',
            started: 'restart',
        },
    };
    it('it should return a string', () => {
        const result = template(mockState, {id: 'clock1'});
        assert.isString(result);
    });

    it('it should return a button with restart if the clock has started equal to restart', () => {
        const result = template(mockState, {id: 'clock1'});
        const expected = `<div class="days number">
                <span></span>
            </div>
            <div class="hours number">
                <span></span>
            </div>
            <div class="minutes number">
                <span></span>
            </div>
            <div class="seconds number">
                <span></span>
            </div>
            <button data-started='restart'>restart</button>`;
        assert.equal(result.trim, expected.trim);
    });

    it('it should return a button with start if the clock has started equal to start', () => {
        const mockStateWithStart = {
            'clock1': {
                days:'',
                hours:'',
                minutes:'',
                seconds:'',
                started: 'start',
            },
        };
        const result = template(mockStateWithStart, {id: 'clock1'});
        const expected = `<div class="days number">
                <span></span>
            </div>
            <div class="hours number">
                <span></span>
            </div>
            <div class="minutes number">
                <span></span>
            </div>
            <div class="seconds number">
                <span></span>
            </div>
            <button data-started='start'>start</button>`;
        assert.equal(result.trim, expected.trim);
    });
});
