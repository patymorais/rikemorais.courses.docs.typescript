import { Negotiation } from "../models/negotiation";
export class NegotiationService {
    getNegotiationsDay() {
        return fetch('http://localhost:8080/data')
            .then(res => res.json())
            .then((data) => {
            return data.map(dataToday => {
                return new Negotiation(new Date(), dataToday.vezes, dataToday.montante);
            });
        });
    }
}
