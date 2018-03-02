import minLength from './minLength.js';

const MIN_LENGTH_N = 12;

describe('Validator: minLength', function() {
    beforeAll(function() {
        this.minLengthN = minLength(MIN_LENGTH_N);
        this.validString = '1234567890abcdef';
        this.invalidString = '123456';
    })
    it('returns a function', function() {
        expect(minLength(MIN_LENGTH_N)).toEqual(expect.any(Function))
    });

    it('returned function returns a boolean', function() {
        expect(this.minLengthN).toEqual(expect.any(Boolean));
    });

    it('returns false for strings shorter than min length', function() {
        expect(this.invalidString.length).toBeLesserThan(MIN_LENGTH_N);
        expect(minLengthN(this.invalidString)).toEqual(false);
    })

    it('returns true for strings longer than or equal min length', function() {
        expect(this.validString.length).toBeGreaterThanOrEqual(MIN_LENGTH_N);
        expect(minLengthN(this.validString)).toEqual(true);
    })
});