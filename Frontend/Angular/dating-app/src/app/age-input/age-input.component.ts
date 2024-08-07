import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgeColorDirective } from '../diractive/age-color.directive';

@Component({
  selector: 'app-age-input',
  standalone: true,
  imports: [FormsModule, CommonModule, AgeColorDirective],
  templateUrl: './age-input.component.html',
  styleUrl: './age-input.component.css',
})
export class AgeInputComponent {
  yearOfBirth: number | null = null;
  age: number | null = null;

  calculateAge() {
    if (this.yearOfBirth) {
      const currentYear = new Date().getFullYear();
      this.age = currentYear - this.yearOfBirth;
    }
  }
}
