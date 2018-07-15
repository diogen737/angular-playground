import { ValidatorFn, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';


/**
 * TODO: document this
 *
 * @param {FormGroup} control
 * @returns {(ValidationErrors | null)}
 */
export const matchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
	const pwd = control.get('password');
	const pwdRepeat = control.get('passwordRepeat');
	if (pwd && pwd.value !== '' && pwdRepeat && pwdRepeat.value !== '' && pwd.value !== pwdRepeat.value) {
		pwdRepeat.setErrors({ 'nomatch': true });
		return { 'nomatch': true };
	}
	return null;
};
