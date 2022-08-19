export function sortArrayOfObj<T>(array: T[], key: keyof T, type: 'num' | 'str' = 'num'): T[] {
  const arr: T[] = [...array];
  if (key) {
    arr.sort((a: T, b: T): number => {
      if (type === 'num') {
        if (+a[key] < +b[key]) return -1;
        if (+a[key] > +b[key]) return 1;
      } else {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
      }
      return 0;
    });
  }
  return arr;
}
