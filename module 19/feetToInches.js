function incheToFeet(inches){
  var feet = inches / 12;
  return feet;
}

var myInches = 132;
var feet = incheToFeet(myInches);
console.log(feet)

//mile to kilo
function mileToKilo(miles){
  var km = miles * 1.60934;
  return km;
}

var marathon = mileToKilo(26.2);
console.log(marathon);