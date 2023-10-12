export const newCal = (arrayBoxes: [string, HTMLElement][]) => {
  const boundingBoxes: Record<string, DOMRect> = {};
  arrayBoxes.forEach((element) => {
    const rect = element[1].getBoundingClientRect();
    boundingBoxes[element[0]] = rect;
  });
  return boundingBoxes;
};
