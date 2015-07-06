/**
 * Created by krilo on 2015/4/21.
 */
var assert = require('assert');

function validator() {
    return ['error.nonpositive'];
}

describe('Be welcome to Mocha', function() {
    it('with a failing test', function() {
        //assert(false, 'Welcome');
        assert.deepEqual(validator(0), ['error.nonpositive']);
    });
});