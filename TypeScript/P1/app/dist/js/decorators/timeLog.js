export function timeLog() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
