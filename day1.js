/// x = 10, what is x + y
// 1) Variable -
var name = "Joel";
console.log(name);
var message = "Hello " + name;
console.log(message); 

/// 2) Variable number
var a = 10;
var b = 3;
// Number operation
var sum = a + b;
console.log(sum);
var minus = a - b;
console.log(minus);
var product = a * b;
console.log(product);
var division = a / b;
console.log(division);
var modulus = a % b;
console.log(modulus)

/// 3) boolean
var hungry = true;
var tired = false;
// OR and AND
console.log(hungry && tired); // AND - both of it need to be true for it to be true....
console.log(hungry || tired); // OR - one of it need to be true for it to be true
console.log(!hungry); // The reverse of the condition

// Condition ( if else )
var age = 30;
if (age < 18){
  console.log("You cannot watch the movie");
}
else {
  console.log("You may watch the movie");
}


// exercise 3
var lines = 15
var multiplier = 3
for (var i = 1; i <= lines ; i ++){
  console.log(i + " x " + multiplier + " = " + i*multiplier);
}
