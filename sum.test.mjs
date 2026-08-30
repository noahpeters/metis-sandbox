import test from "node:test";
import assert from "node:assert/strict";
import { clamp } from "./clamp.mjs";
import { multiply, sum } from "./sum.mjs";

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

test("keeps a value inside the range unchanged", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("raises a value below the range to the minimum", () => {
  assert.equal(clamp(-1, 0, 10), 0);
});

test("lowers a value above the range to the maximum", () => {
  assert.equal(clamp(11, 0, 10), 10);
});
