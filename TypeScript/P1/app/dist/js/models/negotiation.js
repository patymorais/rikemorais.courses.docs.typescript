import { Printable } from "../utils/printable.js";
export class Negotiation extends Printable {
    constructor(_date, quantity, value) {
        super();
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    static createFrom(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Negotiation(date, quantity, value);
    }
    get volume() {
        return this.quantity * this.value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    toText() {
        return `
            Date: ${this.date},
            Quantity: ${this.quantity},
            Value: ${this.value}
        `;
    }
}
