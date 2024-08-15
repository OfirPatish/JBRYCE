import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-add-operation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css'],
})
export class AddOperationComponent {
  newOperation: any = {
    accountNumber: '',
    type: '',
    amount: null,
    date: '',
    interest: null,
    amountOfPayments: null,
    dateOfLoan: '',
  };

  minDate: string;
  isLoading: boolean = false;
  successMessage: string | null = null;

  constructor() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  async addOperation(operationForm: NgForm): Promise<void> {
    this.isLoading = true;
    this.successMessage = null;
    try {
      const response = await axios.post(
        'http://localhost:3000/operations',
        this.newOperation
      );
      console.log('Operation added successfully', response.data);
      this.newOperation = {
        accountNumber: '',
        type: '',
        amount: null,
        date: '',
        interest: null,
        amountOfPayments: null,
        dateOfLoan: '',
      };
      operationForm.resetForm();
      this.successMessage = 'Operation added successfully!';
    } catch (error) {
      console.error('Error adding operation', error);
    } finally {
      this.isLoading = false;
    }
  }

  isLoan(): boolean {
    return this.newOperation.type === 'loan';
  }

  isDepositOrWithdrawal(): boolean {
    return (
      this.newOperation.type === 'deposit' ||
      this.newOperation.type === 'withdrawal'
    );
  }
}
