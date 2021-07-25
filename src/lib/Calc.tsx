export const checkDoubleSymbol = (str: string): boolean => {
	switch (str) {
	case '/':
		return false;
	case '×':
		return false;
	case '+':
		return false;
	case '-':
		return false;
	case ',':
		return false;
	default:
		return true;
	}
};

export const checkComma = (str: string): boolean => {
	console.log(str);
	if (str.indexOf(',') !== -1) {
		return false;
	} else {
		return true;
	}
};

export const str2arr = (str: string): (string | number)[] => {
	return str
		.split('')
		.map(num => num.match(/(\d)|(,)/g) ? num : `#${num}#`)
		.join('')
		.replaceAll(',', '.')
		.split('#');
};

const arrModify = (res: number, str: string, arr:(string | number)[] ): (string | number)[] => {
	arr[arr.indexOf(str) - 1] = res;
	arr.splice(arr.indexOf(str) + 1, 1);
	arr.splice(arr.indexOf(str), 1);
	return arr;
};

const multiply = (arr:(string | number)[]) => {
	const m = +arr[arr.indexOf('×') - 1] * +arr[arr.indexOf('×') + 1];
	arrModify(m, '×', arr);
};
const divide = (arr:(string | number)[]) => {
	const m = +arr[arr.indexOf('/') - 1] / +arr[arr.indexOf('/') + 1];
	arrModify(m, '/', arr);
};
const add = (arr:(string | number)[]) => {
	const m = +arr[arr.indexOf('+') - 1] + +arr[arr.indexOf('+') + 1];
	arrModify(m, '+', arr);
};
const subtract = (arr:(string | number)[]) => {
	const m = +arr[arr.indexOf('-') - 1] - +arr[arr.indexOf('-') + 1];
	arrModify(m, '-', arr);
};

export const calc = (arr: (string | number)[]): string=> {

	if (arr.indexOf('/') !== -1) {
		divide(arr);
	} else if ((arr.indexOf('×') !== -1)) {
		multiply(arr);
	} else if ((arr.indexOf('+') !== -1)) {
		add(arr);
	} else if ((arr.indexOf('-') !== -1)) {
		subtract(arr);
	}
	if (arr.length !== 1) {
		calc(arr);
	}
	return (arr[0]+'').replace('.', ',');
};