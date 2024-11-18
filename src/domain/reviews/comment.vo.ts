/* eslint-disable prettier/prettier */
export class Comment {
    value: string;
  
    constructor(value: string) {
      if (!value || value.trim().length === 0) {
        throw new Error('Comment cannot be empty');
      }
      this.value = value;
    }
  }
  