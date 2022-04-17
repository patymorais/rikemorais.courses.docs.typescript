import { WeekDay } from "../enums/weekDay.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationsView } from "../views/negotiationsView.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationsView('#negotiationsView', true);
    private messageView = new MessageView('#messageView', false);

    constructor() {
        this.inputDate = document.querySelector('#date') as HTMLInputElement;
        this.inputQuantity = document.querySelector('#quantity') as HTMLInputElement;
        this.inputValue = document.querySelector('#value') as HTMLInputElement;
        this.negotiationsView.update(this.negotiations);
    }

    public add(): void {
        const negotiation = Negotiation.createFrom(
            this.inputDate.value,
            this.inputQuantity.value,
            this.inputValue.value
        );
        if (!this.isWorkDay(negotiation.date)) {
            this.messageView.update('Trading not added! It is not a work day!');
            return;
        }

        this.negotiations.add(negotiation);
        this.clearForm();
        this.updateView();
    }
    
    private isWorkDay(date: Date) {
        return date.getDay() > WeekDay.SUNDAY 
            && date.getDay() < WeekDay.SATURDAY;
    }

    private clearForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private updateView(): void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Trading successfully added!');
    }
}