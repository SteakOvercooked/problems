import solution from '@solutions/4_medianOfTwoSortedArrays';

describe('Correctness of palindromes', () => {
  test('[1, 3] and [2]', () => {
    expect(solution([1, 3], [2])).toBe(2);
  });

  test('[1, 2] and [3, 4]', () => {
    expect(solution([1, 2], [3, 4])).toBeCloseTo(2.5);
  });

  // test('abb', () => {
  //   expect(solution('school')).toBe('oo');
  // });

  // test('refer', () => {
  //   expect(solution('refer')).toBe('refer');
  // });

  // test('jgjfowqqqwgradarloop', () => {
  //   expect(solution('jgjfowqqqwgradarloop')).toBe('radar');
  // });
});
