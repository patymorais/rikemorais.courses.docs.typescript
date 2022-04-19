export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Element ${selector} not found!`);
        }
    }

    protected abstract template(model: T): string;
    
    public update(model: T): void {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}