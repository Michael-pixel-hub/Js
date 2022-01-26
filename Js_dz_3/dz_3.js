const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function a(sale) {
	console.log(sale.price - sale.price * 0.15)
}

products.forEach(a);