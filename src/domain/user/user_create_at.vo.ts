export class CreateAt{
value:Date

constructor(value:Date){
    this.value=value;
}


private isValid(){

    if(this.value> new Date()){
        throw new Error("La fecha de creacion no puede ser anterior a la fecha actual")
    }
}
}