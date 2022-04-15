export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        throw new Error('Method not implemented.');
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
