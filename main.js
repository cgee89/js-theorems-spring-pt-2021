console.log("Assessment loaded!");



// let greeting = window.prompt("PROMPT!");
// console.log(parseInt(greeting));
// window.alert("I like annoying windows!");
// Write the code to solve the following problems.
// For each of the following, use window.prompt() to get user input.
// After getting each one right, "comment it out" so that when you
// refresh you don't have to keep typing things in!

 1. Even or Odd
const number = window.promt("Enter a number");
// check if number is even
if(number %2== 0) {
  console.log("The number is even");

}
// if the number is odd
else {
  console.log("The number is odd");
}



// }
// console.log(isEvenOrOdd(12));
// console.log(isEvenOrOdd(19));
// console.log(isEvenOrOdd(-42));

  // Prompt the user for a number
    // If the number is even print "even"
    // If the number is odd print "odd"
// let num = window.prompt ("give me a number");
// console.log(parseint(odd));{
  
// }
//  2. Sum numbers from the user
 var a = prompt("2");
 var b = prompt("3");
window.alert(a+b)


//   3. A random number from min to max
//   Math.random() => 1.2345623452 * 0, 2,3,4,5, {
//   Math.random() => 3.7894332423 * 0,2,3,4,5
//   Math.random() =>  4.3435234525 * 0,2,3,4,5

//   console.log(math.random),
//  }

// function getRandomInt(max){
//   return Math.floor(Math.random()* max);
// }

// console.log(getRandomInt(1.2345623452));
// // expected output 0, 2, 3, 4, 5

// function getRandomInt(max) {
//   return Math.floor(Math.random()* max);
// }

// console.log(getRandomInt(3.7894332423));
// // expected output 0,2,3,4,5

// function getRandomInt(max) {
//   return Math.floor(Math.random()* max);
//   // expected output 0,2,3,4,5
// }
  // The built-in function Math.random() creates a random value from 0 to 1 (not /// including 1).
  // Write a function random(min, max) to generate a random floating-point number // from min to max (not including max).
  // Examples of its work:
    // alert( random(1, 5) ); // 1.2345623452
    // alert( random(1, 5) ); // 3.7894332423
    // alert( random(1, 5) ); // 4.3435234525

// 4. A random integer from min to max
  // You can use the solution of the previous task as the base.
  // Create a function randomInteger(min, max) that generates a random integer 
  // from min to max, including both min and max as possible values.
  // Any number from the interval min..max must appear with the same probability.
  
  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random()* (max-min +1 )) + min;
  // }
  
  // Examples of its work:
    // alert( randomInteger(1, 5) ); // 1
    // alert( randomInteger(1, 5) ); // 3
    // alert( randomInteger(1, 5) ); // 5

  5. Uppercase the first character
//  Function let firstName = "Cortney";
//  firstName.toUpperCase
//  console.log(toUpperCase);

//ucFirst("Cortney") == "Cortney";
//console.log(Cortney);
//   // Write a function ucFirst(str) that returns the string str with the 
  // uppercased first character, for instance:
  // ucFirst("john") == "John";

// 6. Filter search results
  // Write a function filterResults(str, filterStr) that returns true if str contains filterStr 
  // includes <-- HINT
  // otherwise it returns false.
  // The function must be case-insensitive:
    // checkSpam('rabbits for sale!', 'RABBITS') == true
    // checkSpam('Couch, slightly used, $125', 'couch') == true
    // checkSpam("Programming isn't about what you know; it's about what you can figure out.", "bread") == false

// 7. Truncate the text
  // Create a function truncate(str, maxlength) that checks the length of the str 
  // and, if it exceeds maxlength, truncates the string to make its length equal 
  // to maxlength.
  // The result of the function should be the truncated (if needed) string.
  // For instance:
    // truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to tel"
    // truncate("Hi everyone!", 20) = "Hi everyone!"

//   function truncateString(str,maxlength) {
    
// // if it exceeds maxlength
//     if(str.maxlength);
//     return str
//   }

// 8. Extract the money
  // We have a cost in the form "$120". That is: the dollar sign goes first, and 
  // then the number.
  // Create a function extractCurrencyValue(str) that would extract the numeric 
  // value from such string and return it

//  function(extractCurrencyValue("$120") ===120); //true

 9. Height Conversion
    We want to write a function to convert our height string into a decimal number.
     We have a string that is writen like `5'9"` (notice the use of back-ticks, as the string contains single and double quotes)
    Create a function convertHeightToDecimal(`5'9"`) and return a number value of 5.667
    
    // The following chart will help you:
      // Inch	      Decimal Value of a Foot
      // --------------------------------
      // 1 inch	    0.0833
      // 2 inches	  0.167
      // 3 inches	  0.25
      // 4 inches	  0.333
      // 5 inches	  0.417
      // 6 inches	  0.5
      // 7 inches	  0.583
      // 8 inches	  0.667
      // 9 inches	  0.75
      // 10 inches  0.833
      // 11 inches  0.917
      // 12 inches  1

// 10. Candidate Selection
  // You are writing a function to select candidates for a clinical trial of a new Covid vaccine.
  // We need to prompt each candidate for their:
  // - their age
  // - their height
  // - if they've had a positive Covid-19 test ("yes" or "no")
  // - if they smoke ("yes" or "no")

  // If it is a valid candidate print: "Candidate Accepted"
  // If it is an invalid candidate print: "Candidate Rejected"

  // A candidate is invalid if:
  //   - They are under 18, or over 35.
  //   - They have a height of under 5'.
  //   - They have had a positive Covid-19 test.

  // A candidate is valid if:
  //   - They are over 16 but also smoke.
  //   - They are over 16, but are taller than 6'2".
  //   - They are under 25 and over 18, are taller than 5'8", but have had a positive Covid-19 test.

  // Feel free to use your function from question #10 to assist in this problem.
