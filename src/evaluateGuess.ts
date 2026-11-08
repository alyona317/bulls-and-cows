interface GuessEvaluation {
  bulls: number;
  cows: number;
}

export const evaluateGuess = (
  guess: string,
  secret: string,
): GuessEvaluation => {
  const secretChars = [...secret.toLowerCase()];
  const guessChars = [...guess.toLowerCase()];

  const bulls = guessChars.filter((char, i) => char === secretChars[i]).length;
  const matches = guessChars.filter((char) =>
    secretChars.includes(char),
  ).length;

  return { bulls, cows: matches - bulls };
};
