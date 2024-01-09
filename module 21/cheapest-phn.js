const phones = [
  {name:'samsung s5', price:45000, camera:10, storage:32},
  {name:'walton m32', price:15000, camera:8, storage:8},
  {name:'shaomi m3', price:32000, camera:8, storage:16},
  {name:'oppo a2', price:18000, camera:8, storage:32},
  {name:'nokia n95', price:4000, camera:8, storage:2},
  {name:'htc h81', price:25000, camera:8, storage:8}
]

let cheapest = phones[0]
for(const phone of phones){
  if(phone.price < cheapest.price){
    cheapest = phone;
  }
}
console.log(cheapest);