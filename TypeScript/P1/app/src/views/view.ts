export abstract class View<T> {
    protected element: HTMLElement;
    private escape: boolean = false;

    constructor(selector: string, escape?: boolean) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Element ${selector} not found!`);
        }
        if (escape) {
            this.escape = escape;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        const t1 = performance.now();
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
        const t2 = performance.now();
        console.log(`Template rendering time: ${t2 - t1} ms`);
    }
}