class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class ShoppingCart {
    constructor() {
        this.products = []
    }
    addProduct(pr) {
        this.products.push(pr)
    }
    removeProduct(pr) {
        index = this.products.indexOf(pr)
        this.products.splice(index, 1)
    }
    getTotalPrice() {
        let sum = 0
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price
        }
        return sum
    }
    checkout() {
        console.log(`Цена: ${this.getTotalPrice()}`)
        console.log('Продукты:')
        for (let i = 0; i < this.products.length; i++) {
            console.log(`${i+1})`, this.products[i].name)
        }
        this.products = []
    }
}

let pr1 = new Product('1', 10)
let pr2 = new Product('2', 20)
let pr3 = new Product('3', 30)
let cart = new ShoppingCart()
cart.addProduct(pr1)
cart.addProduct(pr2)
cart.addProduct(pr3)
console.log(cart.getTotalPrice())
console.log(cart.products)
cart.checkout()