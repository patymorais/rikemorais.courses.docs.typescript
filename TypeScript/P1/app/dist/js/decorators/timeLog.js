export function timeLog(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divide = 1;
            let unit = 'ms';
            if (inSeconds) {
                divide = 1000;
                unit = 's';
            }
            const t1 = performance.now();
            const returning = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${target.constructor.name} ${propertyKey} took ${(t2 - t1) / divide} ${unit}}.`);
            returning;
        };
        return descriptor;
    };
}
//# sourceMappingURL=timeLog.js.map