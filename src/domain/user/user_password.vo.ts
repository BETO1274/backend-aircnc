/* eslint-disable prettier/prettier */
export class Password {

    value: string;

    constructor(value: string) {

        this.value = value;
        this.isValid();
    }

    private isValid() { 
        if (this.value.length < 12 || this.value.length > 20) {
            throw new Error("La contraseña debe tener entre 12 y 20 caracteres.");
          }
        
          // Validar que contenga al menos una letra mayúscula
          if (!/[A-Z]/.test(this.value)) {
            throw new Error("La contraseña debe incluir al menos una letra mayúscula.");
          }
        
          // Validar que contenga al menos una letra minúscula
          if (!/[a-z]/.test(this.value)) {
            throw new Error("La contraseña debe incluir al menos una letra minúscula.");
          }
        
          // Validar que contenga al menos un número
          if (!/[0-9]/.test(this.value)) {
            throw new Error("La contraseña debe incluir al menos un número.");
          }
        
          // Validar que contenga al menos un carácter especial
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.value)) {
            throw new Error("La contraseña debe incluir al menos un carácter especial.");
          }

    }



}