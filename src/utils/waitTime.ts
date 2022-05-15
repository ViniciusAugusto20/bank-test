export const waitTime = (milliseconds: number): Promise<boolean> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, milliseconds);
  });
};
