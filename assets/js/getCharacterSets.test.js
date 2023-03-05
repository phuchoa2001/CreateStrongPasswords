import {
	getIndexOfAlphabet,
	getElementFromindex, getNumber , getLowercaseLetters,
	getUppercaseLetters , getSpecialChars , convertString , convertStringTokey
} from "./getCharacterSets";

import { numbers  , lowercaseLetters , specialChars} from "./characterSets";

describe('Test function getIndexOfAlphabet', () => {

	test('number', () => {
		expect(getIndexOfAlphabet(1)).toBe(-1);
	});

	test('Tow string', () => {
		expect(getIndexOfAlphabet("HE")).toBe(-1);
	});

	test('String', () => {
		expect(getIndexOfAlphabet("A")).toBe(0);
	});
});

describe('Test function getElementFromindex with number', () => {
	test('Test number 1', () => {
		expect(getElementFromindex(1, numbers)).toBe(1);
	});

	test('Test number 2', () => {
		expect(getElementFromindex(0, numbers)).toBe(0);
	});

	test('Test number 3', () => {
		expect(getElementFromindex(14, numbers)).toBe(3);
	});

	test('Test function getNumber', () => {
		expect(getNumber("o", numbers)).toBe(3);
	});
	
})

describe('Test function getElementFromindex with alphabet', () => {

	test('Test 1', () => {
		expect(getElementFromindex(0, lowercaseLetters)).toBe("a");
	});
	
	test('Test 2', () => {
		expect(getElementFromindex(30 , lowercaseLetters)).toBe("d");
	});

	test('Test function getLowercaseLetters', () => {
		expect(getLowercaseLetters("o" , lowercaseLetters)).toBe("p");
	});

	test('Test function getLowercaseLetters', () => {
		expect(getUppercaseLetters("o" , lowercaseLetters)).toBe("P");
	});

	test('Test function getLowercaseLetters 2', () => {
		expect(getLowercaseLetters("z" , lowercaseLetters)).toBe("a");
	});

	test('Test function getLowercaseLetters 2', () => {
		expect(getUppercaseLetters("Z" , lowercaseLetters)).toBe("A");
	});
})

describe('Test function getElementFromindex with specialChars', () => {

	test('Test 1', () => {
		expect(getElementFromindex(0, specialChars)).toBe("!");
	});
	
	test('Test 2', () => {
		expect(getElementFromindex(30 , specialChars)).toBe("#");
	});

	test('Test function getSpecialChars', () => {
		expect(getSpecialChars("o" , specialChars)).toBe("}");
	});

})


describe('Test function convertString', () => {

	test('Test 1', () => {
		expect(convertString("pABA")).toBe("4bC!");
	});
	
	test.only('Test 2', () => {
		expect(convertString("AAAA")).toBe("0bB!");
	});
})

describe('Test function convertStringTokey', () => {

	test('Test 1', () => {
		expect(convertStringTokey("z")).toBe("2");
	});
	
	test('Test 2', () => {
		expect(convertStringTokey("k")).toBe("1");
	});
	test.only('Test 3', () => {
		expect(convertStringTokey("a")).toBe("0");
	});
})