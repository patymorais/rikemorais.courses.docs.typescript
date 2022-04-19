export function scape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returning = originalMethod.apply(this, args);
        if (typeof returning === 'string') {
            console.log(`@scape to action on class:: 
                ${this.constructor.name} to Method ${propertyKey}`);
            returning = returning
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return returning;
    };
    return descriptor;
}
