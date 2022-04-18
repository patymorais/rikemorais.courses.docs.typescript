export function timeLog(inSeconds: boolean = false) {
    return function (
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            let divide = 1;
            let unit = 'ms';
            if (inSeconds) {
                divide = 1000;
                unit = 's';
            }
            const t1 = performance.now();
            const returning = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${target.constructor.name} ${propertyKey} took ${(t2 - t1)/divide} ${unit}}.`);
            returning;
        }
        return descriptor;
    }
}