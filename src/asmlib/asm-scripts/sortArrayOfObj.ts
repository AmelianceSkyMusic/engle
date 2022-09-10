export function sortArrayOfObj<TYPE>(array: TYPE[], key: keyof TYPE, type: 'num' | 'str' = 'num'): TYPE[] {
	const arr: TYPE[] = [...array];
	if (key) {
		arr.sort((a: TYPE, b: TYPE): number => {
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
