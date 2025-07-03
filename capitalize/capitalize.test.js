const capitalize = require("./capitalize")

it ('works',()=>{

})


describe('capitalize', () => {
  test('capitalizes a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns the same for already capitalized word', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('works with a single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('returns empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('does not change the rest of the string', () => {
    expect(capitalize('javaScript')).toBe('JavaScript');
  });

  test('handles non-letter first characters', () => {
    expect(capitalize('!hello')).toBe('!hello');
  });

  test('returns empty string if input is null or undefined', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });
});