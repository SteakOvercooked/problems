function isNumber(charCode: number) {
  return charCode >= 48 && charCode <= 57;
}

const UPPER_BOUND = Math.pow(2, 31) - 1;
const LOWER_BOUND = Math.pow(2, 31) * -1;

export default function myAtoi(num: string): number {
  let char = 0;
  let numStr = '';
  const symbols = new Map([
    [' ', true],
    ['-', true],
    ['+', true],
  ]);

  while (char < num.length && (symbols.get(num[char]) || isNumber(num.charCodeAt(char)))) {
    if (isNumber(num.charCodeAt(char))) for (const key of symbols.keys()) symbols.set(key, false);
    if (num[char] === '-' || num[char] === '+') {
      symbols.set(num[char], false);
      symbols.set(' ', false);
    }
    if (num[char] !== ' ') numStr += num[char];
    char += 1;
  }

  const result = Number(numStr);
  if (isNaN(result)) return 0;
  if (result < LOWER_BOUND) return LOWER_BOUND;
  if (result > UPPER_BOUND) return UPPER_BOUND;
  return result;
}
