import { Negotiation } from "../models/negotiation";

export function printing(...objects: any[]) {
    for (let object of objects){
        console.log(object.toText());
    }
}