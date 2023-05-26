import solution from '@solutions/23_mergeKSortedLists';
import { toList } from '@task-types/listNode';
import '@jest-rules/toHaveNodes';

describe('Correctness of merging', () => {
  test('[[1,4,5],[1,3,4],[2,6]]', () => {
    expect(solution([toList([1, 4, 5]), toList([1, 3, 4]), toList([2, 6])])).toHaveNodes([
      1, 1, 2, 3, 4, 4, 5, 6,
    ]);
  });

  test('[[]]', () => {
    expect(solution([toList([])])).toHaveNodes([]);
  });

  test('[[2, 5], []]', () => {
    expect(solution([toList([2, 5]), toList([])])).toHaveNodes([2, 5]);
  });
});
