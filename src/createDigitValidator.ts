const ALL_DIGITS = "0123456789abcdef";

export const createDigitValidator = (
  base: number,
): ((char: string) => boolean) => {
  const allowed = ALL_DIGITS.slice(0, base);
  return function (char: string): boolean {
    const lowerChar = char.toLowerCase();
    if (allowed.includes(lowerChar) && lowerChar.length === 1) {
      return true;
    }
    return false;
  };
};
