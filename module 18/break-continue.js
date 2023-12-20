// var i = 0;
// while (i < 10){
//   console.log(i);
//   if(i == 5){
//     break;
//   }
//   i++;
// }

// for(var i = 0; i <= 20; i++){
//   console.log(i);
//   if(i > 9) break;
// }

var nums = [54, 35, 45, 4, 2,90, 101, 24, 24]
// for( var i = 0; i < nums.length; i++){
//   var numbers = nums[i];
//   console.log(numbers)
//   if(numbers > 80) break;
// }

for( var i = 0; i < nums.length; i++){
  var numbers = nums[i];
  if(numbers > 80) continue;
  console.log(numbers)

}