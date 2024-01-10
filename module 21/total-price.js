// const products = [
//   {name: 'laptop', price: 43000},
//   {name: 'shirt', price: 43000},
//   {name: 'watch', price: 43000},
//   {name: 'chocolate', price: 43000},
//   {name: 'panjabi', price: 43000},
// ]

// let totalPrice = 0

// for(const product of products){
//   totalPrice = totalPrice + product.price
// }

// console.log(totalPrice)



const cart = [
  {name: 'laptop', price: 43000, quantity:1},
  {name: 'shirt', price: 43000, quantity:3},
  {name: 'watch', price: 43000, quantity:2},
  {name: 'chocolate', price: 43000, quantity:8},
  {name: 'panjabi', price: 43000, quantity:10},
]

let totalPrice = 0

for(const product of cart){
  console.log(product);
  const productTotal = product.price + product.quantity;
  totalPrice = totalPrice + productTotal;
}
console.log(totalPrice);