/**
 * array に value が含まれていたら削除した array を返す
 * array に value が無い場合追加した array を返す
 * @param array
 * @param value
 * @returns
 */
const getAarryWithValueAddOrReduce = <T>(array: T[], value: T): T[] => {
  if (array.includes(value)) {
    const result = array.filter((a) => a !== value);
    return result;
  }

  return [...array, value];
};

export default getAarryWithValueAddOrReduce;
