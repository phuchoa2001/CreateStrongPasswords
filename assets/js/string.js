import { lowercaseLetters , specialChars} from "./characterSets.js";
import { convertString } from "./getCharacterSets.js";

export const encryptPassword = (string) => {
	if (typeof string !== "string") {
		return "";
	}
	
	const arrStr = string.split("");

	const stringFilter = arrStr.filter((i) => lowercaseLetters.some(j => j === i.toLocaleLowerCase())).join("");
	
	// cắt 4 kí tự ở giữa .
	const cutStr = stringFilter.slice(0 , 4);

	const newStr = convertString(cutStr);

	return string + "*" + newStr;
}

export const decryptPassword = (string) => {
	if (typeof string !== "string") {
		return "";
	}
	
	const index = string.indexOf("*");

	return string.slice(0 , index);

}
