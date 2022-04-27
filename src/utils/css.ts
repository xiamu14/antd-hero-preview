function componentToHex(c: number) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined;
}

export function rgba(hex: string, opacity: number) {
  const rgb = hexToRgb(hex);
  if (rgb) {
    return `rgba(${rgb.r},  ${rgb.g}, ${rgb.b}, ${opacity})`;
  } else {
    throw new Error("invalid hex string");
  }
}
