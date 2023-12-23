// const number = 5;
// const remainder = number % 2 == 0
// console.log(remainder)

// const number = 145;
function isEven(number){
  if(number % 2 == 0){
    return true;
  }
  return false;
}

const myNumber = 1641;
const isMyNumverEven = isEven(myNumber);
console.log(isMyNumverEven);