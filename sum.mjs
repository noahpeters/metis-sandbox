export function sum(left, right) {
  return left + right;
}

export function multiply(left, right) {
  return left * right;
}

export function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}
