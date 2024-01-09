// chair wood = 3cft/ chair 
// talbe wood = 10cft/ talbe 
// bed wood = 50cft/ bed  

function woodQuantity(chairQuantity , tableQuantity, bedQuantity){
  const perchair = 3;
  const pertable = 10;
  const perbed = 50;

  let chairWoodQuantity = chairQuantity * perchair 
  let tableWoodQuantity = tableQuantity * pertable 
  let bedWoodQuantity = bedQuantity * perbed 

  let totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity 
  return totalWood; 
}

let QuantityOfWood = woodQuantity(1,1,1)
console.log(QuantityOfWood) 