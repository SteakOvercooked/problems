import solution from '@solutions/5_longestPalindromicSubstring';

describe('Correctness of palindromes', () => {
  test('cbbd', () => {
    expect(solution('cbbd')).toBe('bb');
  });

  test('abb', () => {
    expect(solution('abb')).toBe('bb');
  });

  test('abb', () => {
    expect(solution('school')).toBe('oo');
  });

  test('refer', () => {
    expect(solution('refer')).toBe('refer');
  });

  test('jgjfowqqqwgradarloop', () => {
    expect(solution('jgjfowqqqwgradarloop')).toBe('radar');
  });
});
