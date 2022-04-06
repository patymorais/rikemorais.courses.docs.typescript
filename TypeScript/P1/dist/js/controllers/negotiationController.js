export class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        console.log(this.inputDate);
        console.log(this.inputQuantity);
        console.log(this.inputValue);
    }
}
