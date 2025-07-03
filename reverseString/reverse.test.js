const rev = require("./reverse");

describe('reverseStr',()=>{
    test('reverses a string', ()=>{
        expect(rev('hello')).toBe('olleh');
    });

    test('reverse a sentence',()=>{
        expect(rev('hello World')).toBe('dlroW olleh');
    });

    test('special characters and numbers',()=>{
        expect(rev('hello123!')).toBe('!321olleh');
    });
    
    test('returns empty string if input is null or undefined', () => {
        expect(rev(null)).toBe('');
        expect(rev(undefined)).toBe('');
    });
});
