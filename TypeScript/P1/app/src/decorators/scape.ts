export function scape(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[] ) {
        let returning = originalMethod.apply(this, args);
        if (typeof returning === 'string') {
            returning = returning
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }	
        return returning;
    }    
    return descriptor;
}