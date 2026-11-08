import { describe, it, expect } from "vitest";
import { createDigitValidator } from "../createDigitValidator.js";

describe("createDigitValidator", () => {
  describe("для восьмеричной системы", () => {
    const isOctDigit = createDigitValidator(8);
    it("принимает 7", () => {
      expect(isOctDigit("7")).toBe(true);
    });
    it("принимает 0", () => {
      expect(isOctDigit("0")).toBe(true);
    });
    it("отклоняет 8", () => {
      expect(isOctDigit("8")).toBe(false);
    });
    it("отклоняет a", () => {
      expect(isOctDigit("a")).toBe(false);
    });
    it("отклоняет пустую строку", () => {
      expect(isOctDigit("")).toBe(false);
    });
    it("отклоняет 12", () => {
      expect(isOctDigit("12")).toBe(false);
    });
  });
  describe("для двоичной системы", () => {
    const isBinDigit = createDigitValidator(2);
    it("принимает 1", () => {
      expect(isBinDigit("1")).toBe(true);
    });
    it("принимает 0", () => {
      expect(isBinDigit("0")).toBe(true);
    });
    it("отклоняет 2", () => {
      expect(isBinDigit("2")).toBe(false);
    });
    it("отклоняет a", () => {
      expect(isBinDigit("a")).toBe(false);
    });
    it("отклоняет пустую строку", () => {
      expect(isBinDigit("")).toBe(false);
    });
    it("отклоняет 12", () => {
      expect(isBinDigit("12")).toBe(false);
    });
  });
  describe("для десятичной системы", () => {
    const isDecDigit = createDigitValidator(10);
    it("принимает 0", () => {
      expect(isDecDigit("0")).toBe(true);
    });
    it("принимает 9", () => {
      expect(isDecDigit("9")).toBe(true);
    });
    it("отклоняет 10", () => {
      expect(isDecDigit("10")).toBe(false);
    });
    it("отклоняет a", () => {
      expect(isDecDigit("a")).toBe(false);
    });
    it("отклоняет пустую строку", () => {
      expect(isDecDigit("")).toBe(false);
    });
  });
  describe("для шестнадцатиричной системы", () => {
    const isHexDigit = createDigitValidator(16);
    it("принимает 0", () => {
      expect(isHexDigit("0")).toBe(true);
    });
    it("принимает 9", () => {
      expect(isHexDigit("9")).toBe(true);
    });
    it("принимает A", () => {
      expect(isHexDigit("A")).toBe(true);
    });
    it("принимает f", () => {
      expect(isHexDigit("f")).toBe(true);
    });
    it("принимает F", () => {
      expect(isHexDigit("F")).toBe(true);
    });
    it("отклоняет пустую строку", () => {
      expect(isHexDigit("")).toBe(false);
    });
    it("отклоняет g", () => {
      expect(isHexDigit("g")).toBe(false);
    });
    it("отклоняет G", () => {
      expect(isHexDigit("G")).toBe(false);
    });
    it("отклоняет 12", () => {
      expect(isHexDigit("12")).toBe(false);
    });
  });
});
