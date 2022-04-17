export class View {
    constructor(selector, escape) {
        this.escape = false;
        this.element = document.querySelector(selector);
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
