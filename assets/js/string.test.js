import { encryptPassword , decryptPassword} from "./string";
describe('Test encryptPassword of decryptPassword', () => {

	test('Test encryptPassword', () => {
		expect(encryptPassword("Phuchoa2001")).toBe("Phuchoa2001*4iV#");
	});

	test('Test decryptPassword', () => {
		expect(decryptPassword("Phuchoa2001*4iV#")).toBe("Phuchoa2001");
	})

});