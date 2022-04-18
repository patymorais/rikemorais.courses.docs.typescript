export class View {
    constructor(selector, escape) {
        this.escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Element ${selector} not found!`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(model) {
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
