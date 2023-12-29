const business = 1650;
const minister = 850;
const army = 900;

// if(business > minister){
//   console.log('Business is bigger')
// }
// else{
//   console.log('minister is bigger')
// }

// if(business > minister && business > army){
//   console.log("business is bigger")
// }
// else if (minister > business && minister > army){
//   console.log('minister is bigger')
// }
// else if ( army > business && army > minister){
//   console.log('army is bigger')
// }

var max = Math.max(business, minister, army)
console.log(max)

function findLargest(first, second){
  if(first > second) return first;
  else  return second;
}

const larger = findLargest(33, 45)
console.log(larger)

function findMini(num1, num2, num3){
  if(num1 < num2 && num1 < num3) return num1; 
  else if(num2 < num1 && num2 < num3) return num2;
  else return num3; 
}
var minimum = findMini(40, 23, 5)
console.log(minimum)
