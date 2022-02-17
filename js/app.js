function Calculator(form, summary) {
    this.prices = {
        products: 0.5,
        orders: 0.25,
        package: {
            basic: 0,
            professional: 25,
            premium: 60,
        },
        accounting: 35,
        terminal: 5
    };

    console.log(this.prices);
}

const form = document.querySelector(".calc__form");

const products = form.querySelector("#products");
const orders = form.querySelector("#orders");
const package = form.querySelector("#package");








