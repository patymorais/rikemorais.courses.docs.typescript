export function timeLog() {
    return function (
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();
            const returning = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${target.constructor.name} ${propertyKey} took ${t2 - t1} ms.`);
            returning;
        }
        return descriptor;
    }
}