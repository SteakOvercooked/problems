import solution from '@solutions/15_3Sum';

describe('Correctness of searching', () => {
  test('[-1, 0, 2, 1, -1, 1, -2]', () => {
    expect(solution([-1, 0, 2, 1, -1, 1, -2])).toEqual([
      [-2, 0, 2],
      [-2, 1, 1],
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('[-1,0,1,2,-1,-4]', () => {
    expect(solution([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('[0, 0, 0]', () => {
    expect(solution([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});
