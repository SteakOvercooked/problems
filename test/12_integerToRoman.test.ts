import solution from '@solutions/12_integerToRoman';

describe('Correctness of conversion', () => {
  test('145', () => {
    expect(solution(145)).toBe('CXLV');
  });

  test('4391', () => {
    expect(solution(4391)).toBe('MMMMCCCXCI');
  });

  test('1040', () => {
    expect(solution(1040)).toBe('MXL');
  });

  test('2', () => {
    expect(solution(2)).toBe('II');
  });

  test('9', () => {
    expect(solution(9)).toBe('IX');
  });

  test('99', () => {
    expect(solution(99)).toBe('XCIX');
  });
});
