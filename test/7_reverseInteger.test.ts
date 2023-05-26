import solution from '@solutions/7_reverseInteger';

describe('Correctness of conversion', () => {
  test('123', () => {
    expect(solution(123)).toBe(321);
  });

  test('-123', () => {
    expect(solution(-123)).toBe(-321);
  });

  test('120', () => {
    expect(solution(120)).toBe(21);
  });

  test('101004', () => {
    expect(solution(101004)).toBe(400101);
  });

  test('1295799999', () => {
    expect(solution(1295799999)).toBe(0);
  });

  test('-1295799999', () => {
    expect(solution(-1295799999)).toBe(0);
  });

  test('-8463847412', () => {
    expect(solution(-8463847412)).toBe(-2147483648);
  });

  test('8463847412', () => {
    expect(solution(8463847412)).toBe(0);
  });
});
