import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordInputComponent } from '../password-input/password-input.component';
import { PasswordStrengthIndicatorComponent } from '../password-strength-indicator/password-strength-indicator';

@NgModule({
  declarations: [
    PasswordInputComponent,
    PasswordStrengthIndicatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PasswordInputComponent,
    PasswordStrengthIndicatorComponent
  ]
})
export class PasswordFormModule { }
