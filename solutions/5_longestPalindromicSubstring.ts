type Borders = [left: number, right: number];

function longestFromPoint(s: string, start: number): Borders {
  let [left, right] = Number.isInteger(start)
    ? [start - 1, start + 1]
    : [Math.floor(start), Math.ceil(start)];

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }

  left = left < 0 ? 0 : left + 1;

  return [left, right];
}

function maxLongest(substr1: Borders, substr2: Borders) {
  if (substr2[1] - substr2[0] > substr1[1] - substr1[0]) return substr2;
  return substr1;
}

function possibleLength(strLength: number, point: number): number {
  const oddOffset = Number.isInteger(point) ? -1 : 0;
  return (strLength - Math.ceil(point)) * 2 + oddOffset;
}

export default function longestPalindrome(s: string): string {
  const middle = Math.floor(s.length / 2);
  let startingPoints: Borders =
    s.length % 2 === 1 ? [middle, middle] : [middle - 0.5, middle - 0.5];
  let longest = longestFromPoint(s, startingPoints[0]);

  while (longest[1] - longest[0] <= possibleLength(s.length, startingPoints[1])) {
    startingPoints = [startingPoints[0] - 0.5, startingPoints[1] + 0.5];
    const [left, right] = startingPoints;
    const leftLongest = longestFromPoint(s, left);
    const rightLongest = longestFromPoint(s, right);
    longest = maxLongest(maxLongest(leftLongest, rightLongest), longest);
  }

  return s.substring(...longest);
}
