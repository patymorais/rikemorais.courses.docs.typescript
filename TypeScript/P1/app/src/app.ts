import { NegotiationController } from "./controllers/negotiationController.js";

const controller = new NegotiationController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
} else {
    throw Error('Form not found!');
}

const importButton = document.querySelector('#import-button');
if (importButton) {
    importButton.addEventListener('click', () => {
        controller.importData();
    });
} else {
    throw Error('Import button not found!');
}