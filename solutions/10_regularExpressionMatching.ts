type Key = `${number}_${number}`;
function makeKey(char: number, rule: number): Key {
  return `${char}_${rule}`;
}

export default function isMatch(s: string, p: string): boolean {
  const cache = new Map<Key, boolean>();

  function isCharMatch(char: number, rule: number): boolean {
    const key = makeKey(char, rule);

    if (cache.has(key)) return cache.get(key);

    const stringExists = char < s.length;
    const patternExists = rule < p.length;

    if (!stringExists && !patternExists) {
      cache.set(key, true);
      return true;
    }

    if (!patternExists) {
      cache.set(key, false);
      return false;
    }

    const matches = stringExists && (s[char] === p[rule] || p[rule] === '.');

    let result: boolean;
    if (rule + 1 < p.length && p[rule + 1] === '*')
      result = isCharMatch(char, rule + 2) || (matches && isCharMatch(char + 1, rule));
    else result = matches && isCharMatch(char + 1, rule + 1);

    cache.set(key, result);
    return result;
  }

  return isCharMatch(0, 0);
}
