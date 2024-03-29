import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ErrorHandlerService,
  ValidatorsService,
} from 'libs/utils/src';

@Component({
  selector: 'frontend-my-settings',
  templateUrl: './my-settings.component.html',
})
export class MySettingsComponent implements OnInit {
  emailForm!: FormControl;
  phoneForm!: FormControl;
  disabled = false;

  passwordForm!: FormGroup;

  constructor(
    private errorH: ErrorHandlerService,
    private formBuilder: FormBuilder,
    private vs: ValidatorsService,
    // private alert: AlertService
  ) {}

  ngOnInit(): void {
    // this.alert.fire(
    //   {
    //     title: 'Something when wrong',
    //     text: "We'll get it fixed as soon as we can",
    //     icon: 'error',
    //   },
    //   {
    //     urlConfi: '/app/books', // 🔴 TODOOO
    //     urlCancel: '/app/books',
    //   }
    // );
    // this._initForm();
  }

  private _initForm() {
    this.phoneForm = this.formBuilder.control('', [Validators.required]);
    this.emailForm = this.formBuilder.control('', [Validators.required]);
    this.passwordForm = this.formBuilder.group(
      {
        password: ['', [Validators.required]],
        password2: ['', [Validators.required]],
      },
      {
        validators: [this.vs.passwordMismatch('password', 'password2')],
      }
    );
  }
}
