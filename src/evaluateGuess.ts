interface GuessEvaluation {
  bulls: number;
  cows: number;
}

export const evaluateGuess = (
  _guess: string,
  _secret: string,
): GuessEvaluation => {
  return { bulls: 0, cows: 0 };
};
