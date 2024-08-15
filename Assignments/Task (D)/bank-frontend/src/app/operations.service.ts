import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  private apiUrl = 'http://localhost:3000/operations';

  constructor() {}

  async getOperations(accountNumber: string): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/${accountNumber}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching operations', error);
      throw error;
    }
  }
}
