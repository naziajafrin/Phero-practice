function largeElement(numbers){
  let max = numbers[0]
  for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    if(element > max){
      max = element
    }
  }
  return max
}

function miniElement(numbers){
  let min = numbers[0]
  for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    if(element < min){
      min = element
    }
  }
  return min
}

function evenElements(numbers){
  let even = []
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
      even.push(numbers[i])
    }
  }
  return even;
} 
function oddElements(numbers){
  let odd = []
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){
      odd.push(numbers[i])
    }
  }
  return odd;
}

let numbers = [3, 6, 2, 8, 32, 7, 5, 9]
console.log(largeElement(numbers))
console.log(miniElement(numbers))
console.log(evenElements(numbers))
console.log(oddElements(numbers))