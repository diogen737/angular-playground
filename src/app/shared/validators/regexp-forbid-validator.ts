import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Returns Validation Error object (forbids validation) if given control's value
 * MATCHES the input regexp
 *
 * @export
 * @param {RegExp} regex
 * @returns {ValidatorFn}
 */
export const regexForbidValidator = (regex: RegExp): ValidatorFn | null => {

	return (control: AbstractControl): {[key: string]: any} | null => {
		const forbidden = regex.test(control.value);
		return forbidden ? { 'forbidden': {value: control.value} } : null;
	};
}
