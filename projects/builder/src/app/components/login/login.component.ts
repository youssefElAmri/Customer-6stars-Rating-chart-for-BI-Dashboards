import type { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import type { OnInit } from '@angular/core';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import type { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { isEmpty, isObject, isString } from '../../helpers/types.utils';
import { AuthService } from '@builder/services/auth.service';
import { EMPTY, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import type { AuthResponse, User } from '../../helpers/types';
import { CommonModule } from '@angular/common';
import '@luzmo/lucero/picker';

interface LogInForm {
  email: FormControl<string>;
  password: FormControl<string>;
  busy: FormControl<boolean>;
  errorMsg: FormControl<string>;
}

interface TwoFAForm {
  totp: FormControl<string>;
  busy: FormControl<boolean>;
  errorMsg: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private httpClient = inject(HttpClient);
  private formBuilder = inject(FormBuilder);

  region: 'europe' | 'us' | 'custom' = 'europe';
  vpcAppUrl: string = '';
  vpcApiUrl: string = '';
  mode: 'login' | '2FA' = 'login';
  logInForm!: FormGroup<LogInForm>;
  twoFAForm!: FormGroup<TwoFAForm>;

  ngOnInit(): void {
    this.logInForm = this.formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      busy: [false],
      errorMsg: ['']
    });

    this.twoFAForm = this.formBuilder.nonNullable.group({
      totp: ['', [Validators.required]],
      busy: [false],
      errorMsg: ['']
    });
  }

  attemptLogin(email: string, password: string): void {
    this.logInForm.controls.busy.setValue(true);
    this.httpClient
      .post<AuthResponse>(
        `${this.authService.getAppUrl()}/auth/vi`,
        { email, password },
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        take(1),
        switchMap((response: AuthResponse) => {
          if (isEmpty(response)) {
            return EMPTY;
          } else {
            if (response.user.twoFactorAuthentication) {
              this.mode = '2FA';
              return of('2FA');
            } else {
              this.authService.setAuthenticated(true, response.user);
              return this.authService.loadUser(response.user.id);
            }
          }
        })
      )
      .subscribe({
        next: (user) => {
          this.logInForm.controls.busy.setValue(false);

          if (user && !isString(user)) {
            this.loginUser(user);
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('error', error);
          this.logInForm.controls.busy.setValue(false);
          this.logInForm.controls.errorMsg.setValue(
            this.getErrorMessage(error, 'login')
          );
          this.authService.setAuthenticated(false);
        }
      });
  }

  submit2FA(email: string, password: string, token: string): void {
    this.twoFAForm.controls.busy.setValue(true);
    this.twoFAForm.controls.errorMsg.setValue('');

    this.httpClient
      .post<AuthResponse>(
        `${this.authService.getAppUrl()}/auth/vi`,
        { email, password, token, useRecoveryCode: false },
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        take(1),
        switchMap((response: AuthResponse) => {
          if (isEmpty(response)) {
            return EMPTY;
          }

          this.authService.setAuthenticated(true, response.user);
          return this.authService.loadUser(response.user.id);
        })
      )
      .subscribe({
        next: (user) => {
          this.twoFAForm.controls.busy.setValue(false);

          if (user && !isString(user)) {
            this.loginUser(user);
          }
        },
        error: (error: HttpErrorResponse) => {
          this.twoFAForm.controls.totp.setValue('');
          this.twoFAForm.controls.busy.setValue(false);
          this.logInForm.controls.errorMsg.setValue(
            this.getErrorMessage(error.error, 'login')
          );
          this.mode = 'login';
        }
      });
  }

  cancel2FA(): void {
    this.mode = 'login';
    this.logInForm.controls.password.setValue('');
    this.logInForm.controls.busy.setValue(false);
  }

  onRegionChanged(event: CustomEvent<typeof this.region>): void {
    const region = event.detail;

    if (region === 'us') {
      this.region = 'us';
      this.authService.setAppUrl('https://app.us.luzmo.com');
      this.authService.setApiUrl('https://api.us.luzmo.com');
    } else if (region === 'europe') {
      this.region = 'europe';
      this.authService.setAppUrl('https://app.luzmo.com');
      this.authService.setApiUrl('https://api.luzmo.com');
    } else if (region === 'custom') {
      this.region = 'custom';
      // TODO: set custom app and api urls
    }
  }

  onVpcAppUrlChanged(event: Event): void {
    const vpcAppUrl = (event.target as HTMLInputElement).value;

    if (vpcAppUrl) {
      this.vpcAppUrl = vpcAppUrl;
      this.authService.setAppUrl(vpcAppUrl);
    }
  }

  onVpcApiUrlChanged(event: Event): void {
    const vpcApiUrl = (event.target as HTMLInputElement).value;

    if (vpcApiUrl) {
      this.vpcApiUrl = vpcApiUrl;
      this.authService.setApiUrl(vpcApiUrl);
    }
  }

  private loginUser(user: User): void {
    if (isEmpty(user)) {
      this.logInForm.controls.errorMsg.setValue(
        this.getErrorMessage(null, 'login')
      );
      this.authService.setAuthenticated(false);
    } else {
      this.logInForm.controls.errorMsg.setValue('');
      this.authService.setAuthenticated(true, user);
    }
  }

  private getErrorMessage(
    error: null | string | HttpErrorResponse,
    action: string
  ): string {
    if (isString(error)) {
      return error;
    }

    if (error && isObject(error) && !isEmpty(error) && isString(error.error)) {
      return error.error;
    }

    return 'Oops, unable to ' + action + '!';
  }
}
