import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SuccessComponent } from './status/success/success.component';
import { FailureComponent } from './status/failure/failure.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Welcome to my Angular App';
  name = 'Ofir Patish';

  bossName = 'Ofir';
  bossComputer = 'Macbook';

  // Feeling
  feelingPlaceholder = 'Feeling mirroring';

  userResponse = '';

  // Age
  userAge = 0;

  // Temperature
  fahrenheitTemperature: number = 0;

  // Currency
  usdAmount: number = 0;
  eurAmount: number = 0;
  cadAmount: number = 0;

  private readonly ILS_TO_USD = 0.27;
  private readonly ILS_TO_EUR = 0.25;
  private readonly ILS_TO_CAD = 0.36;

  // Inches
  inches: number = 0;

  // Feet
  feet: number = 0;

  whoIsYourBoss() {
    return `${this.bossName} is the boss of ${this.bossComputer}`;
  }

  feelingResponse(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.userResponse = input.value;
  }

  convertToFahrenheit(event: Event): void {
    const celsius = (event.target as HTMLInputElement).valueAsNumber;
    this.fahrenheitTemperature = (celsius * 9) / 5 + 32;
  }

  convertCurrency(event: Event): void {
    const ils = (event.target as HTMLInputElement).valueAsNumber;
    this.usdAmount = ils * this.ILS_TO_USD;
    this.eurAmount = ils * this.ILS_TO_EUR;
    this.cadAmount = ils * this.ILS_TO_CAD;
  }

  convertToInches(event: Event): void {
    const cm = (event.target as HTMLInputElement).valueAsNumber;
    this.inches = cm * 0.393700787;
  }

  convertToFeet(event: Event): void {
    const meters = (event.target as HTMLInputElement).valueAsNumber;
    this.feet = meters * 3.28084;
  }
}
