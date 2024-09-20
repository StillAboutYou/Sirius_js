class Customer {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
}

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Order {
    constructor(products = [], customer) {
        this.products = products
        this.customer = customer
        this.totalPrice = 0
        products.forEach(product => {
            this.totalPrice += product.price
        })
    }

    calculateTotal() {
        this.products.forEach(product => {
            this.totalPrice += product.price
        })
        return this.totalPrice
    }

    addProduct(product, quantity = 1) {
        for (let i = 0; i < quantity; i++) {
            this.products.push(product)
        }
        this.totalPrice += this.calculateTotal()
        return this
    }

    printOrder() {
        console.log(`Заказ для ${this.customer.name} (${this.customer.email}):`)
        console.log('Товары:')
        this.products.forEach((product, index) => {
            console.log(`${index+1})`, `${product.name} ($${product.price})`)
        })
        console.log(`Цена: $${this.totalPrice}`)
        return this
    }
}


let user1 = new Customer('111', '111@mail.ru')
let user2 = new Customer('222', '222@mail.ru')
let product1 = new Product('1111', 10)
let product2 = new Product('2222', 15)
let product3 = new Product('3333', 87)
let product4 = new Product('4444', 1)
let order1 = new Order([product1, product2, product3], user1)
let order2 = new Order([product3], user2)
order2.addProduct(product4)
console.log(order1.calculateTotal())
order1.printOrder()
console.log()
order2.printOrder()