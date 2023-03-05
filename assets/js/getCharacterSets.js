import { numbers, lowercaseLetters, specialChars } from "./characterSets.js"

export const getIndexOfAlphabet = (string) => {
	if (typeof string !== "string" || string.length > 1) {
		return -1;
	}
  
	if(lowercaseLetters.some((item) => item === string.toLowerCase())) {
		return lowercaseLetters.findIndex((item) => item === string.toLowerCase());
	}
  
	if(numbers.some((item) => item === string.toLowerCase())) {
		return numbers.findIndex((item) => item === string.toLowerCase());
	}
}

export const getElementFromindex = (index, array) => {
	const arrLength = array.length
	if (index > arrLength - 1) {
		let indexNumber = (index % arrLength) - 1;
		return array[indexNumber]
	}

	return array[index];
}

export const getNumber = (string) => {
	const index = getIndexOfAlphabet(string);
	if (index === -1) {
		return index;
	}

	return getElementFromindex(index, numbers)
}

export const getLowercaseLetters = (string) => {
	const index = getIndexOfAlphabet(string);
	if (index === -1) {
		return index;
	}

	if (index + 1 >= lowercaseLetters.length) {
		return getElementFromindex(0, lowercaseLetters)
	}

	return getElementFromindex(index + 1, lowercaseLetters)
}

export const getUppercaseLetters = (string) => {
	const index = getIndexOfAlphabet(string);
	if (index === -1) {
		return index;
	}

	if (index + 1 >= lowercaseLetters.length) {
		return new String(getElementFromindex(0, lowercaseLetters)).toUpperCase()
	}

	return new String(getElementFromindex(index + 1, lowercaseLetters)).toUpperCase()
}

export const getSpecialChars = (string) => {
	const index = getIndexOfAlphabet(string);
	if (index === -1) {
		return index;
	}

	return getElementFromindex(index, specialChars);
}


export const convertString = (string) => {
	if (typeof string !== "string" || string.length !== 4) {
		return "";
	}

	return getNumber(string[0]) + getLowercaseLetters(string[1]) +
		getUppercaseLetters(string[2]) + getSpecialChars(string[3])
}

export const convertStringTokey = (string) => {
	if (typeof string !== "string" || string.length !== 1) {
		return "";
	}

	const index = getIndexOfAlphabet(string);
	if (index === -1) {
		return "";
	}

	const key = Math.floor(index / numbers.length)
	return key.toString();
}