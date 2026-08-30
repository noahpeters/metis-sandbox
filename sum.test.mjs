import test from "node:test";
import assert from "node:assert/strict";
import { clamp, multiply, sum } from "./sum.mjs";

test("adds two numbers", () => {
  assert.equal(sum(2, 3), 5);
});

test("multiplies two positive numbers", () => {
  assert.equal(multiply(2, 3), 6);
});

test("multiplies with a negative operand", () => {
  assert.equal(multiply(-2, 3), -6);
});

test("multiplies by zero", () => {
  assert.equal(multiply(4, 0), 0);
});

test("clamp returns a value inside the range unchanged", () => {
  assert.equal(clamp(5, 1, 10), 5);
});

test("clamp returns the minimum for a value below the range", () => {
  assert.equal(clamp(-1, 1, 10), 1);
});

test("clamp returns the maximum for a value above the range", () => {
  assert.equal(clamp(11, 1, 10), 10);
});
