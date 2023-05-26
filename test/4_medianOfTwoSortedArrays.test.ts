import solution from '@solutions/4_medianOfTwoSortedArrays';

describe('Correctness of median search', () => {
  test('[1, 3] and [2]', () => {
    expect(solution([1, 3], [2])).toBe(2);
  });

  test('[1, 2] and [3, 4]', () => {
    expect(solution([1, 2], [3, 4])).toBeCloseTo(2.5);
  });

  test('[-9, -5, 5, 6] and []', () => {
    expect(solution([-9, -5, 5, 6], [])).toBe(0);
  });

  test('[1, 2, 3, 4] and [-1, 2, 6, 104]', () => {
    expect(solution([1, 2, 3, 4], [-1, 2, 6, 104])).toBe(2.5);
  });
});
