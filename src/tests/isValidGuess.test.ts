import { describe, it, expect } from "vitest";
import { isValidGuess } from "../isValidGuess.js";

describe("isValidGuess", () => {
  it("принимает корректную попытку в десятичной", () => {
    expect(isValidGuess("1234", 4, 10)).toBe(true);
  });
  it("отклоняет попытку длиннее заданной", () => {
    expect(isValidGuess("12345", 4, 10)).toBe(false);
  });
  it("отклоняет попытку короче заданной", () => {
    expect(isValidGuess("123", 4, 10)).toBe(false);
  });
  it("отклоняет букву в десятичной", () => {
    expect(isValidGuess("1a34", 4, 10)).toBe(false);
  });
  it("отклоняет 8 в восьмеричной", () => {
    expect(isValidGuess("1238", 4, 8)).toBe(false);
  });
  it("отклоняет повтор цифры", () => {
    expect(isValidGuess("1134", 4, 10)).toBe(false);
  });
  it("принимает hex-цифры в разном регистре", () => {
    expect(isValidGuess("12aB", 4, 16)).toBe(true);
  });
  it("отклоняет повтор в hex без учёта регистра", () => {
    expect(isValidGuess("12aA", 4, 16)).toBe(false);
  });
});
