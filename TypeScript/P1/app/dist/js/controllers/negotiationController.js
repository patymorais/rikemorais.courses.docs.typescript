var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/domInjector.js";
import { inspect } from "../decorators/inspect.js";
import { timeLog } from "../decorators/timeLog.js";
import { WeekDay } from "../enums/weekDay.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsService } from "../services/negotiationsService.js";
import { printing } from "../utils/printing.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationsView } from "../views/negotiationsView.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#messageView');
        this.negotiationsService = new NegotiationsService();
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isWorkDay(negotiation.date)) {
            this.messageView.update('Trading not added! It is not a work day!');
            return;
        }
        this.negotiations.add(negotiation);
        printing(negotiation, this.negotiations);
        this.clearForm();
        this.updateView();
    }
    importData() {
        this.negotiationsService
            .getNegotiationsDay()
            .then(negotiationsToday => {
            return negotiationsToday.filter(negotiationToday => {
                return !this.negotiations
                    .list()
                    .some(negotiation => negotiation
                    .isEqual(negotiationToday));
            });
        })
            .then(negotiationsToday => {
            for (let negotiation of negotiationsToday) {
                this.negotiations.add(negotiation);
            }
            this.negotiationsView.update(this.negotiations);
        });
    }
    isWorkDay(date) {
        return date.getDay() > WeekDay.SUNDAY
            && date.getDay() < WeekDay.SATURDAY;
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Trading successfully added!');
    }
}
__decorate([
    domInjector('#data')
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domInjector('#quantity')
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector('#value')
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    inspect(),
    timeLog()
], NegotiationController.prototype, "add", null);
//# sourceMappingURL=negotiationController.js.map