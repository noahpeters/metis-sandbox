import test from "node:test";
import assert from "node:assert/strict";
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
