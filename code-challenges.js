// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// The function will be declared using const boilingPoint.
// It will have the parameter temp which will take a number argument
// It will utilize the conditional if/else if statement by using relational and equality operators to determine if temp is greater than, less than, or equal to 212 (actually while typing the code, I realized I don't need the equality operator since the function can be handled by a catch-all "else")
// It will return a string using string interpolation to insert the value of temp along with a statement comparing it to the boiling point

const boilingPoint = (temp) => {
    if(temp > 212){
        return `${temp} is above boiling point`
    } else if (temp < 212){
        return `${temp} is below boiling point`
    } else {
        return `${temp} is at boiling point`
    }
}

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: 
// The function will be declared using const comboArray.
// It will take the parameters array1 and array2
// It will use the built-in methods for arrays including accessor method .concat, which will require a new variable newArray to be created, and .length to return the length.
//
const comboArray = (array1, array2) => {
    let newArray = array1.concat(array2)
    return newArray.length
}

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
console.log(comboArray(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// The function will be declared using const reverse
// It will have the parameter phrase, which will take an argument of any string
// Strings don't have a built-in method to reverse! (researched via https://www.w3schools.com/js/js_string_methods.asp). So it will have to first convert the string to an array, using the built in method .split using empty string argument to separate each letter
// Then the method .reverse can be used on the new array
// Last, the array will be comnverted back into a string and returned. I will use an empty string argument to place each character next to the next.
const reverse = (phrase) => {
let splitArray = phrase.split("")
let flip = splitArray.reverse()
let flippedPhrase = flip.join("")
return flippedPhrase
}


const currentCohort = "Golf 2022"
// Expected output: "2202 floG"
console.log(reverse(currentCohort))
// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// Declare function using lastIndex, with parameters of numArray (the array of numbers) and searchFor (the number to search for)
// Use the built-in method .lastIndexOf 
const lastIndex = (numArray, searchFor) => {
    return numArray.lastIndexOf(searchFor)
}

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8
console.log(lastIndex(myNumbers, givenValue1))
console.log(lastIndex(myNumbers, givenValue2))
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: The function will be declared with const sortNumbers, and have the parameter numberArray
// The function will use the .sort method. It was mentioned in lectures that this method can act strangely with numbers, so I researched at https://www.w3schools.com/jsref/jsref_sort.asp, and will add the compareFunction parameter. This parameter compares numbers by subtracting one from the other and using the result to sort it, which helps it understand comparisons of numbers with different numbers of digits. b - a indicates that it should order them as largest to smallest
const sortNumbers = (numberArray) => {
    return numberArray.sort((a, b) => b - a)
}

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(sortNumbers(sanDiegoSummerTemperatures))
console.log(sortNumbers(sanDiegoWinterTemperatures))