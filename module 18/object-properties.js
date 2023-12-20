var computer = { 
  color:'black',
  storage:'18gb',
  price: 32000
}
// console.log(computer);
console.log(computer.price)

var computerStorage = computer.storage
console.log(computerStorage)

//different ways to set a value of an object property
var priceProperty = "price";

computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 24000;
console.log(computer)