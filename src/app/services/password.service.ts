import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
    private REGEX_FOR_WEAK_PASS = /^[a-zA-Zа-яА-ЯїЇіІєЄёЁ0-9!@#$%^&*(),.?":{}|<>'"`~№]+$/;
    private REGEX_FOR_STRONG_PASS = /^(?=.*[a-zA-Zа-яА-ЯїЇіІєЄёЁ])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>'"`~№]).+$/;
    private REGEX_OF_LETTERS_N_DIGITS = /^(?=.*[a-zA-Zа-яА-ЯїЇіІєЄёЁ])(?=.*[0-9]).+$/;
    private REGEX_OF_LETTERS_N_SYMBOLS = /^(?=.*[a-zA-Zа-яА-ЯїЇіІєЄёЁ])(?=.*[!@#$%^&*(),.?":{}|<>'"`~№]).+$/;
    private REGEX_OF_DIGITS_N_SYMBOLS = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>'"`~№]).+$/;

    private _passwordStrength = new BehaviorSubject<string>('empty');
    passwordStrength$: Observable<string> = this._passwordStrength.asObservable();

    get passwordStrength(): string {
        return this._passwordStrength.value;
    }

    validatePassword(password: string): void {
        if (!password.length) {
          this._passwordStrength.next('empty');
        } else if (password.length < 8) {
          this._passwordStrength.next('notEnoughChars');
        } else if (this.isPasswordStrong(password)) {
          this._passwordStrength.next('strong');
        } else if (this.isPasswordMedium(password)) {
          this._passwordStrength.next('medium');
        } else {
          this._passwordStrength.next('weak');
        }
      }
      

    isPasswordWeak(password: string): boolean {
        return this.REGEX_FOR_WEAK_PASS.test(password);
    }
    
    isPasswordMedium(password: string): boolean {
        return this.REGEX_OF_DIGITS_N_SYMBOLS.test(password) 
        || this.REGEX_OF_LETTERS_N_DIGITS.test(password)
        || this.REGEX_OF_LETTERS_N_SYMBOLS.test(password);
    }
    
    isPasswordStrong(password: string): boolean {
        return this.REGEX_FOR_STRONG_PASS.test(password);
    }
}
