import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgFor,
    UserInputComponent,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cart';
  FruitList = ['apple', 'banana', 'orange'];

  addProduct(fruit: string) {
    this.FruitList.push(fruit);
  }
}
