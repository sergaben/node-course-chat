const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString',()=>{
    it('should reject non-string values',()=>{
        var testString = 456478;
        var resultTest = isRealString(testString);
        expect(resultTest).toBe(false);
    });
    it('should reject string with only spaces',()=>{
        var testString = '    ';
        var resultTest = isRealString(testString);
        expect(resultTest).toBe(false);
    });
    it('should allow string with non-space characters',()=>{
        var testString = 'Sergio Gayon';
        var resultTest = isRealString(testString);
        expect(resultTest).toBe(true);
    });
});