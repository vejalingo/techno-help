export const moveItemWithinArray = (arr: string[], item: string, newIndex: number) => {
  const arrClone = [...arr];
  const oldIndex = arrClone.indexOf(item);
  arrClone.splice(newIndex, 0, arrClone.splice(oldIndex, 1)[0]);
  return arrClone;
};

export const insertItemIntoArray = (arr: string[], item: string, index: number) => {
  const arrClone = [...arr];
  arrClone.splice(index, 0, item);
  return arrClone;
};

