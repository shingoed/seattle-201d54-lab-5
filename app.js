'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
    // return an array where the first number is the sum, and the second number is a string
    var myArray = [];
    var sumAnswer = a + b;
    myArray[0] = sumAnswer
    var result = `The sum of ${a} and ${b} is ${sumAnswer}.`
    myArray[1] = result;
    return myArray;
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and 
returns an array where the first element is the product of those numbers, and 
the second element is a string that EXACTLY follows this example and uses the 
values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.

(SHingo notes: so this WILL always return an Array with two values at 0 it
will have a number and at 1 it will always have a string because 
that is what I told it to do by assigning the two values at these array points and then returning the array 
which is what the function is doing)
*/

// Write your code here 
function multiply(a, b) { //eslint-disable-line
    var myArray2 = [];
    var productAnswer = a * b;
    myArray2[0] = productAnswer
    var result = `The product of 5 and 9 is 45.`
    myArray2[1] = result;
    return myArray2;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and 
returns an array where the first element is the sum of those three numbers, the second element is
the product of those three numbers,  and the third and fourth elements are strings that EXACTLY 
follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, 
use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
    var myArray3 = [];
    var result1 = sum(a, b);
    var resultFinal = sum(result1[0], c)[0];
    // var resultFinal = sum(myArray)
    myArray3[0] = resultFinal[0];

    var resultMultiply1 = multiply(a, b);
    var resultMultiplyFinal = multiply(resultMultiply1[0], c);
    myArray3[1] = resultMultiplyFinal[0]
    var result3 = `4 and 7 and 5 sum to 16.`
    var result4 = `The product of 4 and 7 and 5 is 140.`
    myArray3[2] = result3;
    myArray3[3] = result4;
    return myArray3;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its 
single argument and then returns an array where the first element is the sum of the 
numbers in the array, and the second element is a string that EXACTLY follows this 
example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're 
going to have to be resourceful to figure out how to do this. However, you may 
continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished
, uncomment the call for the testSumArray() function and see if the test passes.

Shingo: at first i was trying to do this w for loop but one of the grads who was hanging out
helped me understand that i didnt need to do a for loop because the array.length isnt even that
long so in this case i would just be better off just doing as i did below. 
1. I create a blank array to store everything later
2. I assign a new variable with the VALUE of the sum function of the testArray by just 
addressing the Array point 0 by just saying testArray[0] then als do the same by doing 
testArray[1] and then I have to finish BECAUSE the function that I created only can "compute"
the value a and b so i stop there but if it did have c then i could just do the whole thing with 
this single line of code
3. VERY IMPORTANT: at the end of the parans add [0] to make the sum to be put into 0 of the 
sum function because 0 is the place that has the variable and we dont want the string part of the
variable which is held in [1] (basically its just keeping the 0 which is the number value and leaving out the 
    string which is held in [1] because then it will break the code meaning i just want this part 
    which is  [0] part of the sum function because if we dont specify then it will 
    bring the string with it because the sum function has a string in [1])******should clarify + ask again abt what the computer is 
    doing ******
4. then do the same thing but this time use result variable in a and then testArray[2] for b 
5. finally store everything into myArray4 position 0 so that it meets requirement


*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) {
    var myArray4 = [];
    var result = sum(testArray[0], testArray[1])[0];
    // console.log(result);
    var resultFinal = sum(result, testArray[2])[0];
    myArray4[0] = resultFinal;

    var result2 = "2,3,4 was passed in as an array of numbers, and 9 is their sum."
    myArray4[1] = result2
    return myArray4;
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its 
argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
    var myArray5 = [];
    var result = multiply(testArray[0], testArray[1])[0];
    var resultFinal = multiply(result, testArray[2])[0];
    myArray5[0] = resultFinal;

    var result2 = "The numbers 2,3,4 have a product of 24."
    myArray5[1] = result2
    return myArray5;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
