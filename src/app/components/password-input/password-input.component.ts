import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PasswordService } from '../../services/password.service';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordInputComponent,
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor, OnInit {
  password: string = '';
  passwordControll = new FormControl();
  @Output() passwordStrength = new EventEmitter<string>();
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private passwordService: PasswordService) {}

  writeValue(value: string): void {
    this.passwordControll.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onPasswordChange(value: string) {
    this.writeValue(value);
    this.onChange(value);
    this.onTouched();
    this.passwordService.validatePassword(value);
  }


  ngOnInit(): void {
    this.passwordControll.valueChanges.subscribe((val) => {
      this.onPasswordChange(val);
    });
  }
}
