import solution from '@solutions/8_stringToInteger';

describe('Correctness of conversion', () => {
  test('42', () => {
    expect(solution('42')).toBe(42);
  });

  test('   -42', () => {
    expect(solution('   -42')).toBe(-42);
  });

  test('4193 with words', () => {
    expect(solution('4193 with words')).toBe(4193);
  });

  test('words and 987', () => {
    expect(solution('words and 987')).toBe(0);
  });

  test('+-12', () => {
    expect(solution('+-12')).toBe(0);
  });

  test('0 123', () => {
    expect(solution('0 123')).toBe(0);
  });
});
