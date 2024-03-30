function clamp(min, input, max) {
  return Math.max(min, Math.min(input, max));
}

function mapRange(in_min, in_max, input, out_min, out_max) {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

function truncate(value, decimals) {
  return parseFloat(value.toFixed(decimals));
}

export function power4InOut(t: number): number {
  return t < 0.5 ? 8 * Math.pow(t, 4) : 1 - 8 * Math.pow(t - 1, 4);
}

const Maths = { lerp, clamp, mapRange, truncate };

export { clamp, lerp, mapRange, truncate };
export default Maths;
