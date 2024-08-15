import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-fetch-operations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fetch-operations.component.html',
  styleUrls: ['./fetch-operations.component.css'],
})
export class FetchOperationsComponent implements OnInit {
  accountNumber: string = '';
  operations: any[] = [];
  searchPerformed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  async fetchOperations(): Promise<void> {
    this.searchPerformed = true;
    if (this.accountNumber) {
      try {
        const response = await axios.get(
          `http://localhost:3000/operations/${this.accountNumber}`
        );
        this.operations = response.data.map((operation: any) => ({
          ...operation,
          date: new Date(operation.date).toLocaleDateString(),
        }));
      } catch (error) {
        console.error('Error fetching operations', error);
      }
    } else {
      console.warn('Please enter an account number');
    }
  }
}
