const analyze = require('./analyze');


describe('analyze()', () => {
  test('should return correct statistics for a valid array', () => {
    const result = analyze([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      length: 6,
      max_number: 8,
      min_number: 1,
      average: 4
    });
  });

  test('should throw error for array with only one element', () => {
    expect(() => analyze([5])).toThrow('array size should be more than one.');
  });

  test('should handle negative numbers correctly', () => {
    const result = analyze([-3, -1, -7, -4]);
    expect(result).toEqual({
      length: 4,
      max_number: -1,
      min_number: -7,
      average: -3.75
    });
  });

  test('should return decimal average if needed', () => {
    const result = analyze([1, 2]);
    expect(result).toEqual({
      length: 2,
      max_number: 2,
      min_number: 1,
      average: 1.5
    });
  });
});