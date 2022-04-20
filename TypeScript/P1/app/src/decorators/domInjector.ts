export function domInjector(selector: string) {

    return function(target: any, propertyKey: string) {
        console.log(`Modifying ${target.constructor.name} and adding ${propertyKey}`);
        let element: HTMLElement;
        const getter = function() {
            if (!element) {
                element = <HTMLElement>document.querySelector(selector);
                console.log(`Getting ${selector} from DOM and storing in ${propertyKey}`);
            }
            return element;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }
}