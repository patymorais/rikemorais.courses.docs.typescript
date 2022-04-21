import { NegotiationDay } from "../interfaces/negotiationDay"
import { Negotiation } from "../models/negotiation"

export class NegotiationService {
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