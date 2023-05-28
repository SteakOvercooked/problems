export default function longestCommonPrefix(strs: string[]): string {
  let prefix = '';

  if (strs.length === 0) return prefix;

  let char = 0;
  const withoutPrefix = (str: string) => char === str.length || str[char] !== strs[0][char];

  while (!strs.some(withoutPrefix)) {
    prefix += strs[0][char];
    char++;
  }

  return prefix;
}
