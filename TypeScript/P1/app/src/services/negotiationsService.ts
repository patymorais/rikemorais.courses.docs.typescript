import { NegotiationDay } from "../interfaces/negotiationDay.js"
import { Negotiation } from "../models/negotiation.js"

export class NegotiationsService {
    public getNegotiationsDay(): Promise<Negotiation[]> {
        return fetch('http://localhost:8080/data')
            .then(res => res.json())
            .then((data: NegotiationDay[]) => {
                return data.map(dataToday => {
                    return new Negotiation(
                        new Date(), 
                        dataToday.vezes, 
                        dataToday.montante
                    )
                })
            });
    }
}