/* eslint-disable prettier/prettier */
export class Rating {
    value: number;
  
    constructor(value: number) {
      if (value < 1 || value > 5) {
        throw new Error('Rating must be between 1 and 5');
      }
      this.value = value;
    }
  }
  