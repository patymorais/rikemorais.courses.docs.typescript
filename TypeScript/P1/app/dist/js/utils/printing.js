export function printing(...objects) {
    for (let object of objects) {
        console.log(object.toText());
    }
}
