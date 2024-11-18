export class Email{
value:string;

constructor (value:string){
this.value=value;
this.isvalid();

}

private isvalid(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
        throw new Error ("El correo electrónico no tiene un formato válido.") ;
      }
}

}