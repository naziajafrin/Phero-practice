var fabBook = "4 hour work week";
var  bookList = ['positioning' , 'hooked', 'start with you', 'shoe dog' ];


var shoeDogIndex = bookList.indexOf('shoe dog');
console.log(shoeDogIndex);

bookList.push('small Giants');
bookList.pop();


// conditionals
if(bookList[1] == 'hooked') console.log('I am hooked');
else console.log('I am not hooked');

// while loop
var i = 0; // loop variable
while(i < 15){
  console.log(i);
  console.log('looping looping looping')
  i++;
}

//for loop
for(var i = 0; i < 15; i++){
  console.log(i);
  console.log('looping looping looping')
}
