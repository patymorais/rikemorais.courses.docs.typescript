import { Negotiation } from "./models/negotiation.js";

const negotiation = new Negotiation(new Date(), 10, 100);
console.log(negotiation);
negotiation.quantity = 1000;
console.log(negotiation);