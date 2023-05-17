let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {

  console.log('Ola,', order.order.delivery.deliveryPerson, 'entrega para:', order.name, 'telefone:', order.phoneNumber, 'R.', order.address.street, 'N',order.address.number, 'AP:', order.address.apartment);
}

customerInfo(order);

order.name = 'Luiz Silva'
order.payment = 50.00

function orderModifier(order) {
  let pizzas = Object.keys(order.order.pizza)
  return `Olá, ${order.name} o valor total de seu pedido de ${pizzas} e ${order.order.drinks.coke.type} e R$ ${order.payment}.00.`;
}
console.log(orderModifier(order));