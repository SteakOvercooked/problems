type CompareResult = 1 | 0 | -1;

const LOWER_BOUND = Math.pow(2, 31).toString();
const UPPER_BOUND = (Math.pow(2, 31) - 1).toString();

function compare(strNum1: string, strNum2: string): CompareResult {
  if (strNum1.length > strNum2.length) return 1;
  if (strNum1.length < strNum2.length) return -1;

  for (let char = 0; char < strNum1.length; char++) {
    if (strNum1.charCodeAt(char) > strNum2.charCodeAt(char)) return 1;
    if (strNum1.charCodeAt(char) < strNum2.charCodeAt(char)) return -1;
  }

  return 0;
}

function reverseNumber(num: number): string {
  let integer = Math.abs(num);
  let leadingZeroes = true;
  let numStr = '';

  while (integer !== 0) {
    const remainder = integer % 10;
    if (remainder !== 0) leadingZeroes = false;
    if (!leadingZeroes) numStr += remainder.toString();
    integer = ~~(integer / 10);
  }

  return numStr;
}

export default function reverse(num: number) {
  const sign = num < 0 ? -1 : 1;
  const numStr = reverseNumber(num);
  const comparison = sign === -1 ? compare(numStr, LOWER_BOUND) : compare(numStr, UPPER_BOUND);

  if (comparison === 1) return 0;

  return Number(numStr) * sign;
}
