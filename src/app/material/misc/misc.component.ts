import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog, MAT_DATE_FORMATS } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import * as moment from 'moment';

import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { regexAllowValidator } from '../../shared/validators/regexp-allow-validator';
import { matchValidator } from '../../shared/validators/match-validator';

@Component({
	selector: 'app-misc',
	templateUrl: './misc.component.html',
	styleUrls: ['./misc.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MiscComponent {

	LOGIN_MIN_LENGTH = 2;
	PWD_WEAK_PATTERN = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{3,})/;
	PWD_STRONG_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	PWD_PATTERN = this.PWD_WEAK_PATTERN;

	stepperGroup: FormGroup = this.fb.group({
		formArray: this.fb.array([
			this.fb.group({
				login: ['', [Validators.required, Validators.minLength(this.LOGIN_MIN_LENGTH)] ],
				email: ['', [Validators.required, Validators.email] ],
			}),
			this.fb.group({
				password: ['', [Validators.required, regexAllowValidator(this.PWD_PATTERN)] ],
				passwordRepeat: ['', Validators.required]
			}, { validator: matchValidator }),
			this.fb.group({
				state: '',
				dateFrom: moment()
			})
		])
	});

	constructor(private fb: FormBuilder, private popup: MatDialog) {}

	openPopup(): void {
		// console.log(this.dateFrom.value);
		this.popup.open(InfoPopupComponent, {
			width: '350px',
			height: '300px',
			data: {
				login: this.login.value,
				email: this.email.value,
				password: this.password.value,
				state: this.state.value,
				dateFrom: this.dateFrom.value
			}
		});
	}

	get formArray(): AbstractControl | null { return this.stepperGroup.get('formArray'); }

	get mainFormGroup(): AbstractControl | null { return this.formArray.get([0]); }
	get pwdFormGroup(): AbstractControl | null { return this.formArray.get([1]); }
	get miscFormGroup(): AbstractControl | null { return this.formArray.get([2]); }

	get login(): AbstractControl | null { return this.mainFormGroup.get('login'); }
	get email(): AbstractControl | null { return this.mainFormGroup.get('email'); }
	get password(): AbstractControl | null { return this.pwdFormGroup.get('password'); }
	get passwordRepeat(): AbstractControl | null { return this.pwdFormGroup.get('passwordRepeat'); }
	get state(): AbstractControl | null { return this.miscFormGroup.get('state'); }
	get dateFrom(): AbstractControl | null { return this.miscFormGroup.get('dateFrom'); }

}
