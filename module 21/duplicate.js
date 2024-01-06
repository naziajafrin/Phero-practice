function remeveDuplicate(names){
  let unique = []
  for(const element of names){
    // console.log(element)
    if(unique.indexOf(element) == -1){
      unique.push(element)
    }
  }
  return unique;
}

let names = ['habul', 'kabul', 'babul', 'abdul', 'habul', 'kabul']
const uniqueNames = remeveDuplicate(names)
console.log(uniqueNames);

