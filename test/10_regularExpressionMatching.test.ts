import solution from '@solutions/10_regularExpressionMatching';

describe('Correctness of expression matching', () => {
  test('aa', () => {
    expect(solution('aa', 'a')).toBe(false);
  });

  test('aa', () => {
    expect(solution('aa', 'a*')).toBe(true);
  });

  test('ab', () => {
    expect(solution('ab', '.*')).toBe(true);
  });

  test('aab', () => {
    expect(solution('aab', 'c*a*b')).toBe(true);
  });

  test('aaa', () => {
    expect(solution('aaa', 'a*a')).toBe(true);
  });

  test('aaa', () => {
    expect(solution('aaa', 'ab*a*c*a')).toBe(true);
  });
});
