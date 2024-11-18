/* eslint-disable prettier/prettier */
export class UserName{
    value:string
    constructor(value:string){
    this.value=value;
    this.isValid();
    }

private isValid(){
    // Regla 1: El nombre de usuario debe tener entre 8 y 15 caracteres
    if (this.value.length < 8 || this.value.length > 15) {
        throw new Error( "El nombre de usuario debe tener entre 8 y 15 caracteres.");
    }
  
    // Regla 2: El primer carácter debe ser una letra
    if (!/^[a-zA-Z]/.test(this.value)) {
        throw new Error( "El nombre de usuario debe comenzar con una letra.");
    }
  
    // Regla 3: No debe contener espacios
    if (/\s/.test(this.value)) {
      throw new Error("El nombre de usuario no puede contener espacios.");
    }
  
    // Regla 4: Solo puede contener letras y números después del primer carácter
    if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(this.value)) {
     throw new Error("El nombre de usuario solo puede contener letras y números.");
    }
  
  }
  

    }