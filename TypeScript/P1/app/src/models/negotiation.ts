import { Printable } from "../utils/printable.js";

export class Negotiation implements Printable {
    constructor(
         private _date: Date, 
         public readonly quantity: number, 
         public readonly value: number
    ) {}

    public static createFrom(dateString: string, quantityString: string, valueString: string): Negotiation {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Negotiation(date, quantity, value);
    }

    get volume(): number {
        return this.quantity * this.value;
    }

    get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }

    public toText(): string {
        return `
            Date: ${this.date},
            Quantity: ${this.quantity},
            Value: ${this.value}
        `;
    }
}