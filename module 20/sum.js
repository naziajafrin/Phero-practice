// const numbers = [44, 35, 35, 12, 56, 63]
// for(let i = 0; i < numbers.length; i++){
//   numbers
//   console.log(i, numbers[i])
// }

function arrayTotal(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    let elements = numbers[i]
    sum = sum + elements
  }
  return sum;
}


const total = arrayTotal([44, 35, 35, 12, 56, 63])
console.log(total)
