// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The answer was correct; .length is a built in method that can be used on strings to determine the number of characters (including spaces!) in the string, and provides that number as the output.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The answer was correct; using bracket annotation after a string allows you to put in an index number, and it will return the character that it finds at that index. Strings are zero-indexed so it starts with H at 0, and the letter o is at index 4.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: My answer was almost correct, but it did not return the quotations. Similar to the above question, arrays are zero indexed, and it used the value assigned to the variable index to look at the item at the 1 position. However, the console returned the value of the string, not including the notation of the string itself.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: I think it will throw an error because the .toUpperCase method is for strings, not arrays
// b) Verify and explain: it was correct, it specifically noted in the error that "weekendDays.toUpperCase is not a function". .toUpperCase can be used to change all the characters in a string to upper case. Going to comment it back out now to avoid making errors for the rest of my testing!

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: It was correct, the method typeof will tell you what data type follows it. Since .length used on an array returns the number of elements in the array, it returned "number"
