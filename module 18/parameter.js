function bringSingara(taka){
  console.log('singara r jonno dice' ,taka)
  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
console.log('singara dice:',singara);
