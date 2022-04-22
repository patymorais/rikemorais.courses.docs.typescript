export function scape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returning = originalMethod.apply(this, args);
        if (typeof returning === 'string') {
            returning = returning
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return returning;
    };
    return descriptor;
}
//# sourceMappingURL=scape.js.map