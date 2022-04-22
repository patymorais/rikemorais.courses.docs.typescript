import { Printable } from "./printable.js";

export function printing(...objects: Printable[]) {
    for (let object of objects){
        console.log(object.toText());
    }
}