import maxLength from './maxLength.js';

const MAX_LENGTH_N = 12;

describe('Validator: maxLength', function() {
    beforeAll(function() {
        this.maxLengthN = maxLength(MAX_LENGTH_N);
        this.invalidString = '1234567890abcdef';
        this.validString = '123456';
    })
    it('returns a function', function() {
        expect(maxLength(MAX_LENGTH_N)).toEqual(expect.any(Function))
    });

    it('returned function returns a boolean', function() {
        expect(this.maxLengthN).toEqual(expect.any(Boolean));
    });

    it('returns false for strings longer than max length', function() {
        expect(this.invalidString.length).toBeGreaterThan(MAX_LENGTH_N);
        expect(maxLengthN(this.invalidString)).toEqual(false);
    })

    it('returns true for strings shorter than or equal max length', function() {
        expect(this.validString.length).toBeLessThanOrEqual(MAX_LENGTH_N);
        expect(maxLengthN(this.validString)).toEqual(true);
    })
});