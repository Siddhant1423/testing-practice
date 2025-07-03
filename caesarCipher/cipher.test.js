const cipher = require('./cipher');

describe('caesarCipher', () => {
  test('shifts lowercase letters', () => {
    expect(cipher('abc', 3)).toBe('def');
  });

  test('shifts uppercase letters', () => {
    expect(cipher('ABC', 2)).toBe('CDE');
  });

  test('wraps from z to a', () => {
    expect(cipher('xyz', 3)).toBe('abc');
    expect(cipher('XYZ', 3)).toBe('ABC');
  });

  test('preserves case', () => {
    expect(cipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('leaves punctuation unchanged', () => {
    expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('works with negative shift', () => {
    expect(cipher('def', -3)).toBe('abc');
    expect(cipher('Khoor', -3)).toBe('Hello');
  });

  test('handles zero shift (no change)', () => {
    expect(cipher('Hello, World!', 0)).toBe('Hello, World!');
  });

  test('handles large shift values', () => {
    expect(cipher('abc', 52)).toBe('abc');
    expect(cipher('xyz', 54)).toBe('zab'); 
  });
});