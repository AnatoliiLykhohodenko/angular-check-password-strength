import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password-strength-indicator',
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.css']
})

export class PasswordStrengthIndicatorComponent implements OnInit {
  passwordStrength: string = '';

  constructor(private passwordService: PasswordService) {}

  ngOnInit(): void {
    this.passwordService.passwordStrength$.subscribe(strength => {
      this.passwordStrength = strength;
      this.getFirstIndicatorColor();
      this.getSecondIndicatorColor();
      this.getThirdIndicatorColor();
    });
  }



  getIndicatorColor(indicatorNumber: 1 | 2 | 3): { 'background-color': string } {
    switch (this.passwordStrength) {
        case('empty'): {
            return { 'background-color': 'grey' };
        }
        case('notEnoughChars'): {
            return { 'background-color': 'red' };
        }
        case('strong'): {
            return { 'background-color': 'green' };
        }
        case('medium'): {
            if (indicatorNumber === 3) {
                return { 'background-color': 'grey' };
            } else {
                return { 'background-color': 'yellow' };
            }
        }
        case('weak'): {
            if (indicatorNumber === 1) {
                return { 'background-color': 'red' };
            } else {
                return { 'background-color': 'grey' };
            }
        }

        default: {
            return { 'background-color': 'grey' };
        }
    }
  }

  getFirstIndicatorColor() {
      return this.getIndicatorColor(1);
  }

  getSecondIndicatorColor() {
      return this.getIndicatorColor(2);
  }

  getThirdIndicatorColor() {
      return this.getIndicatorColor(3);
  }
}








