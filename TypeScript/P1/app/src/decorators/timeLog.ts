export function timeLog() {
    return function (
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor) {
            return descriptor;
    }
}