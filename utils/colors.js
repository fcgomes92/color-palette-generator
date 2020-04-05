function reduceColorsToHex(acc, curr) {
  let hex = Number(curr).toString(16);
  return [...acc, hex.length < 2 ? (hex = '0' + hex) : hex];
}

export function toHex(colorArray) {
  return colorArray.reduce(reduceColorsToHex, []).join('');
}
