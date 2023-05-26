import solution from '@solutions/6_zigzagConversion';

describe('Correctness of conversion', () => {
  test('PAYPALISHIRING', () => {
    expect(solution('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  });

  test('PAYPALISHIRING', () => {
    expect(solution('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  });

  test('A', () => {
    expect(solution('A', 1)).toBe('A');
  });

  test('AB', () => {
    expect(solution('AB', 1)).toBe('AB');
  });
});
