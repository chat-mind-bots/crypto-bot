export const generateArrayNumbers = (upTo: number): number[] => {
  const numbers: number[] = [];

  for (let i = 0; i <= upTo; i++) {
    numbers.push(i);
  }
  return numbers;
};
