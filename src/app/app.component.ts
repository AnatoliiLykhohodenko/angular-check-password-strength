import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password!: string;
  line1!: boolean; 
  line2!: boolean;
  line3!: boolean;

  validatePassword() {
    this.line1 = this.isPasswordEasy(this.password);
    this.line2 = this.isPasswordMedium(this.password);
    this.line3 = this.isPasswordStrong(this.password);
  }

  isInputEmpty(str: string): boolean {
    return !str.length;
  }

  isEightCharPassword(str: string): boolean {
    return str.length > 8;
  }

  isPasswordEasy(str: string): boolean {
    return /^[a-zA-Zzа-яА-ЯїЇіІєЄёЁ0-9!@#$%^&*(),.?":{}|<>'"`~№]+$/.test(str);
  }

  isPasswordMedium(str: string): boolean {
    return /^(?=.*[a-zA-Zа-яА-ЯїЇіІєЄёЁ])(?=.*[0-9]).+$/.test(str) 
    || /^(?=.*[a-zA-Zа-яА-ЯїЇіІєЄёЁ])(?=.*[!@#$%^&*(),.?":{}|<>'"`~№]).+$/.test(str)
    || /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>'"`~№]).+$/.test(str);
  }

  isPasswordStrong(str: string): boolean {
    return /^(?=.*[a-zA-Zа-яА-ЯїЇіІєЄёЁ])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>'"`~№]).+$/.test(str);
  }

  getLineColorStyle(lineNumber: number): { 'background-color': string } {
    if (!this.password.length) {
      return { 'background-color': 'grey' };
    } 
    
    if(this.password.length < 8){
      return { 'background-color': 'red' };
    } 

    if(this.password.length >= 8 
      && this.isPasswordEasy(this.password) 
      && !this.isPasswordMedium(this.password)
    ){
      if (lineNumber === 1) {
        return { 'background-color': 'red' };
      } else {
        return { 'background-color': 'grey' };
      }
    } 
  
    if(this.password.length >= 8 
      && this.isPasswordEasy(this.password) 
      && this.isPasswordMedium(this.password)
      && !this.isPasswordStrong(this.password)
    ){
      if (lineNumber === 3) {
        return { 'background-color': 'grey' };
      } else {
        return { 'background-color': 'yellow' };
      }
    } 

    if(this.password.length >= 8 
      && this.isPasswordEasy(this.password) 
      && this.isPasswordMedium(this.password)
      && this.isPasswordStrong(this.password)
    ){
      return { 'background-color': 'green' };
    } 

    return { 'background-color': 'grey' };
  }
}