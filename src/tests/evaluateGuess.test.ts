import { describe, it, expect } from "vitest";
import { evaluateGuess } from "../evaluateGuess.js";

describe("evaluateGuess", () => {
  it("все быки при полном совпадении", () => {
    expect(evaluateGuess("1234", "1234")).toEqual({ bulls: 4, cows: 0 });
  });
  it("все коровы, когда цифры есть, но не на своих местах", () => {
    expect(evaluateGuess("1234", "4321")).toEqual({ bulls: 0, cows: 4 });
  });
  it("ничего, когда общих цифр нет", () => {
    expect(evaluateGuess("1234", "5678")).toEqual({ bulls: 0, cows: 0 });
  });
  it("и быки, и коровы", () => {
    expect(evaluateGuess("1243", "1234")).toEqual({ bulls: 2, cows: 2 });
  });
  it("не учитывает регистр в hex", () => {
    expect(evaluateGuess("1a2b", "1A2B")).toEqual({ bulls: 4, cows: 0 });
  });
});
