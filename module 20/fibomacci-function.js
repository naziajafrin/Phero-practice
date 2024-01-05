// function fibonacciSeries(num){
//   const fibo = [0, 1]
//   for(let i = 2; i <= num ; i++){
//     fibo[i] = fibo[i - 1] + fibo [i - 2]
//   }
//   return fibo;
// }

// console.log(fibonacciSeries(10));

function fibonacciSeries(num){
  if(typeof num != 'number'){
    return "give a number"
  }
  if (num < 2){
    return "give a positive number"
  } 

  const fibo = [0, 1]
  for(let i = 2; i <= num ; i++){
    fibo[i] = fibo[i - 1] + fibo [i - 2]
  }
  return fibo;
}

console.log(fibonacciSeries('19'));