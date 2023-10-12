const shuffleArray = <T>(arr: T[], direction: "asc" | "desc" = "desc") => {
  if (arr.length < 2) {
    return arr;
  }
  const arrCopy = [...arr];
  if (direction === "desc") {
    const lastElement = arrCopy.pop();
    arrCopy.unshift(lastElement!);
  } else {
    const first = arrCopy.shift();
    arrCopy.push(first!);
  }
  return arrCopy;
};
export default shuffleArray;
