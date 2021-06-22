// Fizzbuzz
lines = 101
for(var i = 1; i < lines; i+=1){
  if(i % 3 == 0 && i % 5 == 0){
    console.log("Fizzbuzz")
  }
  else if( i % 3 == 0){
    console.log("Fizz")
  }
  else if( i % 5 == 0){
    console.log("Buzz")
  }
  else{
    console.log(i)
  }
}
