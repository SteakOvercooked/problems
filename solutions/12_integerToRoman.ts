const roman = [
  { glyph: 'M', value: 1000 },
  { glyph: 'D', value: 500 },
  { glyph: 'C', value: 100 },
  { glyph: 'L', value: 50 },
  { glyph: 'X', value: 10 },
  { glyph: 'V', value: 5 },
  { glyph: 'I', value: 1 },
];

export default function intToRoman(num: number): string {
  let romanNumber = '';
  let glyphIdx = 0;
  let remainder = num;
  while (remainder !== 0) {
    const { glyph, value } = roman[glyphIdx];
    const integer = ~~(remainder / value);

    if (integer === 4 && glyphIdx - 1 >= 0) {
      const { glyph: prevGlyph } = roman[glyphIdx - 1];
      const lastChar = romanNumber.length - 1;
      if (romanNumber[lastChar] === prevGlyph)
        romanNumber = romanNumber.substring(0, lastChar) + `${glyph}${roman[glyphIdx - 2].glyph}`;
      else romanNumber += `${glyph}${prevGlyph}`;
    } else {
      for (let i = 0; i < integer; i++) romanNumber += glyph;
    }

    remainder %= value;
    glyphIdx++;
  }
  return romanNumber;
}
