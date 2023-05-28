import solution from '@solutions/14_longestCommonPrefix';

describe('Correctness of longest prefix search', () => {
  test('[flower, flow, flames]', () => {
    expect(solution(['flower', 'flow', 'flames'])).toBe('fl');
  });

  test('[]', () => {
    expect(solution([])).toBe('');
  });

  test('[dog, dogghter, dogger]', () => {
    expect(solution(['dog', 'dogghter', 'dogger'])).toBe('dog');
  });
});
