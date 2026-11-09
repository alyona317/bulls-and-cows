const ALL_DIGITS = "0123456789abcdef";

const pickDigits = (
  available: string,
  count: number,
  random: () => number,
): string => {
  if (count === 0) {
    return "";
  }

  const index = Math.min(
    Math.floor(random() * available.length),
    available.length - 1,
  );
  const digit = available.charAt(index);
  const rest = available.slice(0, index) + available.slice(index + 1);

  return digit + pickDigits(rest, count - 1, random);
};

export const generateSecret = (
  length: number,
  base: number,
  random: () => number = Math.random,
): string => pickDigits(ALL_DIGITS.slice(0, base), length, random);
