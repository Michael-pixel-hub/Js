//es5

function Product (name, price) {
	this.name = name;
	this.price = price;
};

Product.prototype.make25PercentDiscount = function() {
	this.price = this.price - this.price * 0,25;
};

let product1 = new Product('Миша', 225);
product1.make25PercentDiscount();

//es6

class Product2 {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	make25PercentDiscount() {
		this.price = this.price - this.price * 0,25;
	}
}

let product2 = new Product2('Миша', 225);
product2.make25PercentDiscount();