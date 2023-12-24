function factorialrecursive(n){
  if(n == 1) return 1;

  return n * factorialrecursive(n - 1)
}

const myFactorial = factorialrecursive(7);
console.log(myFactorial);