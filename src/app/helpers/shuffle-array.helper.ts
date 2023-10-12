const shuffleArray = <T>(arr: T[]) => {
  if (arr.length < 2) {
    // Если массив содержит менее двух элементов, нет необходимости что-то перемещать
    return arr;
  }

  // Создаем копию массива, чтобы не изменять оригинальный
  const arrCopy = [...arr];

  // Удаляем последний элемент из копии
  const lastElement = arrCopy.pop();

  // Вставляем удаленный элемент в начало массива
  arrCopy.unshift(lastElement!);

  return arrCopy;
};
export default shuffleArray;
