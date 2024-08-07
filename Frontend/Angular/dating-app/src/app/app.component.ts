import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgeInputComponent } from './age-input/age-input.component';
import { AgeColorDirective } from './diractive/age-color.directive';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AgeInputComponent,
    FormsModule,
    AgeColorDirective,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dating-app';
}
