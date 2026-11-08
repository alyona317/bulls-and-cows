import { describe, it, expect } from "vitest";
import { generateSecret } from "../generateSecret.js";
import { isValidGuess } from "../isValidGuess.js";

const createSequence = (values: number[]): (() => number) => {
  let index = 0;
  return () => {
    const value = values[index % values.length] ?? 0;
    index += 1;
    return value;
  };
};

describe("generateSecret", () => {
  it("при random = 0 берёт первые доступные цифры", () => {
    expect(generateSecret(4, 10, () => 0)).toBe("0123");
  });

  it("при random близком к 1 берёт последние доступные цифры", () => {
    expect(generateSecret(4, 10, () => 0.999)).toBe("9876");
  });

  it("не повторяет уже выбранную цифру", () => {
    expect(generateSecret(3, 10, createSequence([0.5]))).toBe("546");
  });

  it("использует буквы в шестнадцатеричной системе", () => {
    expect(generateSecret(3, 16, () => 0.999)).toBe("fed");
  });

  it("работает для двоичной системы", () => {
    expect(generateSecret(2, 2, () => 0)).toBe("01");
  });

  it("с одинаковым random даёт одинаковый результат", () => {
    const first = generateSecret(4, 10, createSequence([0.3, 0.7, 0.1]));
    const second = generateSecret(4, 10, createSequence([0.3, 0.7, 0.1]));
    expect(first).toBe(second);
  });

  it("с настоящим Math.random создаёт корректный секрет", () => {
    const secret = generateSecret(5, 16);
    expect(isValidGuess(secret, 5, 16)).toBe(true);
  });
});
