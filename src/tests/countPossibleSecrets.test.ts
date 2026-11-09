import { describe, it, expect } from "vitest";
import { countPossibleSecrets } from "../countPossibleSecrets.js";

describe("countPossibleSecrets", () => {
  it("возвращает 1 для длины 0", () => {
    expect(countPossibleSecrets(0, 10)).toBe(1);
  });
  it("возвращает base для длины 1", () => {
    expect(countPossibleSecrets(1, 10)).toBe(10);
  });
  it("считает варианты для двоичной системы", () => {
    expect(countPossibleSecrets(2, 2)).toBe(2);
  });
  it("считает варианты для восьмеричной системы", () => {
    expect(countPossibleSecrets(4, 8)).toBe(1680);
  });
  it("считает варианты для шестнадцатеричной системы", () => {
    expect(countPossibleSecrets(2, 16)).toBe(240);
  });
});
