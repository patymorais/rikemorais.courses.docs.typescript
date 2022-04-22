export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modifying ${target.constructor.name} and adding ${propertyKey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Getting ${selector} from DOM and storing in ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=domInjector.js.map