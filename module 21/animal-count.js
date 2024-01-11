// function animalCount(miles){
//   if(miles <= 10){
//     const count = miles * 10
//     return count
//   }
// }

// const animals = animalCount(8);
// console.log(animals);

function animalCount(miles){
  const animalDensityFirst10Miles = 10;
  const animalDensitySecond10Miles = 50;
  const animalDensityFirstRestMiles = 100;


  if(miles <= 10){
    const count = miles * 10
    return count
  }
  else if (miles <= 20){
    const firstDenseAnimal = 10 * animalDensityFirst10Miles
    const restMiles = miles - 10
    const secondDenseAnimal = restMiles * animalDensitySecond10Miles
    const totalAnimal = firstDenseAnimal + secondDenseAnimal
    return totalAnimal 
  }
  else {
    const firstDenseAnimal = 10 * animalDensityFirst10Miles
    const secondDenseAnimal = 10 * animalDensitySecond10Miles
    const restMiles = miles - 20
    const restDenseAnimal = restMiles * animalDensityFirstRestMiles
    const totalAnimal = firstDenseAnimal + secondDenseAnimal + restDenseAnimal
    return totalAnimal
  }
}

const animals = animalCount(13);
console.log(animals);
