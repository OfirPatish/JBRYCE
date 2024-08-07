import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  fruitInput = 'pineapple';

  @Output() addProduct = new EventEmitter<string>();

  onAddProduct() {
    this.addProduct.emit(this.fruitInput);
    this.fruitInput = '';
  }
}
