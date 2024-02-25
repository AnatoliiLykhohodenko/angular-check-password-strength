import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { PasswordInputComponent } from './components/password-input/password-input.component';
// import { PasswordStrengthIndicatorComponent } from './components/password-strength-indicator/password-strength-indicator';
import { PasswordService } from './services/password.service';
import { HeaderComponent } from './components/header/header.component';
import { PasswordFormComponent } from './components/form/password-form.component'
import { PasswordFormModule } from './components/form/password-form.module';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    ReactiveFormsModule,
    PasswordFormModule,
  ],
  providers: [PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
