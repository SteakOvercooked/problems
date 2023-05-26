export default function convert(s: string, numRows: number): string {
  if (numRows < 2) return s;

  const rows = new Array<string>(numRows).fill('');
  let row = 0;
  let direction = 1;
  for (let char = 0; char < s.length; char++) {
    rows[row] += s[char];
    row += 1 * direction;

    if (row === numRows - 1) direction = -1;
    if (row === 0) direction = 1;
  }

  return new String('').concat(...rows);
}
