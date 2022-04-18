export function inspect() {
    return function (
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`--- Method ${propertyKey} called with ${args.length} arguments.`);
            console.log(`------ parameters: ${JSON.stringify(args)}`);
            const returning = originalMethod.apply(this, args);
            console.log(`------ returning: ${JSON.stringify(returning)}`);
            return returning;
        }
        return descriptor;
    }    
}