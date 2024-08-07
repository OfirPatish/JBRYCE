import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SuccessComponent } from './status/success/success.component';
import { FailureComponent } from './status/failure/failure.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './diractive/highlight.directive';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // HeaderComponent,
    // MenuComponent,
    // MainComponent,
    // FooterComponent,
    SuccessComponent,
    FailureComponent,
    FormsModule,
    HighlightDirective,
    NgIf,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Welcome to my Angular App';
  name = 'Ofir Patish';

  // Boss Information
  bossName = 'Ofir';
  bossComputer = 'Macbook';

  whoIsYourBoss() {
    return `${this.bossName} is the boss of ${this.bossComputer}`;
  }

  // Feeling
  feelingPlaceholder = 'Feeling mirroring';
  userResponse = '';

  feelingResponse(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.userResponse = input.value;
  }

  // Age
  userAge = 0;

  // Temperature
  fahrenheitTemperature: number = 0;

  convertToFahrenheit(event: Event): void {
    const celsius = (event.target as HTMLInputElement).valueAsNumber;
    this.fahrenheitTemperature = (celsius * 9) / 5 + 32;
  }

  // Currency
  usdAmount: number = 0;
  eurAmount: number = 0;
  cadAmount: number = 0;

  private readonly ILS_TO_USD = 0.27;
  private readonly ILS_TO_EUR = 0.25;
  private readonly ILS_TO_CAD = 0.36;

  convertCurrency(event: Event): void {
    const ils = (event.target as HTMLInputElement).valueAsNumber;
    this.usdAmount = ils * this.ILS_TO_USD;
    this.eurAmount = ils * this.ILS_TO_EUR;
    this.cadAmount = ils * this.ILS_TO_CAD;
  }

  // Inches
  inches: number = 0;

  convertToInches(event: Event): void {
    const cm = (event.target as HTMLInputElement).valueAsNumber;
    this.inches = cm * 0.393700787;
  }

  // Feet
  feet: number = 0;

  convertToFeet(event: Event): void {
    const meters = (event.target as HTMLInputElement).valueAsNumber;
    this.feet = meters * 3.28084;
  }

  // Lie detection
  isLie = false;

  // Class switching
  classNames: string[] = ['class1', 'class2', 'class3'];
  classTexts: string[] = [
    'Why don’t scientists trust atoms? Because they make up everything!',
    'Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field!',
    'Why don’t skeletons fight each other? They don’t have the guts!',
  ];
  currentClassIndex: number = 0;

  nextClass() {
    this.currentClassIndex =
      (this.currentClassIndex + 1) % this.classNames.length;
  }

  getCurrentClass() {
    return this.classNames[this.currentClassIndex];
  }

  getCurrentText() {
    return this.classTexts[this.currentClassIndex];
  }
}
