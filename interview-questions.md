# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: git is software on our computers, that stands for global information tracker. It keeps track of changes we make to files. Github is a cloud based way to share that tracking - it sends the information to a server (in Idaho!) and allows collaboration from anywhere by tracking and merging changes between multiple users. It can also serve as a record of your work, by being a live and frequently updated portfolio. 

Researched answer: (source: https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)
One unique thing about git is that it stores information about the entire file system in a kind of "snapshot" of where every file is in time, rather than updating each file. So for example, if you have 3 files, and change 1 of them, rather than tracking that change, it updates the entire file system to reflect both the changed and unchanged files. This allows users to go back in time in a sense, in order to see the history of an entire project. Another great benefit of this, is that it is hard to lose data, since previous versions of files are saved in the history and can be returned to.

2. Which JavaScript operators will return a Boolean value?

Your answer: relational (<, <=, >, >=) and equality operators (==, ===) return Boolean values of true or false after comparing two values

Researched answer: (source: https://dev.to/banesag/javascript-logical-operators-and-boolean-values-1l07)
One operator I forgot to mention was the logical not operator whch effectively reverses any of the above mentioned ones. It can also be used in front of a Boolean itself (e.g. !true === false). The operators || and && (logical AND and logical OR) can also be used in combination with the relational/equality operators, as well as Booleans themselves in order to return a Boolean (e.g. true && false would return false)

3. What is an index? What is the difference between index and value?

Your answer: an index is the number which indicates the position of a value - those could be elements in an array, or characters in a string. The value is the content of the element/character itself. For example, in the string "Hello" the value "H" is at the index 0.

Researched answer: (source: https://www.w3schools.com/js/js_arrays.asp)
After researching, I would add that when you know the index, you can access the value and vice versa. For example, if I need to know what value is being kept in the first position, I could find that out using the index (e.g. sampleArray[1]) or, if I needed to know where a certain value is, I could check that using the value and have an index number be returned.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: arrays are a composite data type which provide a way to store a lot of data within one variable. Javascript provides a lot of built in methods that can be used to mutate (modify) as well as access the information inside of the arrays. Strings are a primitive data type, which are denoted by a value inside of quotation marks, meant to be read by humans, not computers. Strings, like arrays, can also use built in methods to mutate or access them. They each have their own different built in methods, with some overlap (e.g. .length, .concat,). Strings can be stored inside arrays.

Researched answer: (source: https://medium.com/@baruchphillips/mutating-js-strings-9f5151fbaa2)
I realized an error in my answer after researching. Strings in Javascript are immutable, which means that they cannot be modified - a new string must be created if you want to make changes to it. This is true for all primitive data types in JS. Another difference is that strings only contain characters, whereas arrays can contain different types of data.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: One partner will serve as the "driver" by having hands on the keyboard and physically inputting the code. The other partner will serve as the "navigator" and takes the role of guiding the driver. This can include narrating out loud what code to write, checking for typos, and keeping in mind the big scale plan of where everything should go. Each person should take around 15-30 minutes on their turn, and then switch.

Researched answer: Some more great tips to add after doing some research 
- make sure to save frequently!
-one member of the team can be researching solutions while the other is troubleshooting any problems.
-it can be helpful to have a whiteboarding space to work out ideas with your partner (having a routine of good pseudocode can also help with this!)
-Connect with your partner on slack on a mobile device too in case internet goes down for some reason
-have a backup plan for poor internet connection
-Make sure you take regular breaks in which both you and your partner break and come back at the same time so both people are refreshed and on the same page. Don't work while your partner is on a break.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: some example of higher order functions we're going to be learning about are .map(), which lets you call a function for every element in an array, and then displays the results, and .filter(), which will make a new array displaying only the elements which have passed a test that we provide via a function. They are considered higher order functions because they take functions as arguments.

2. Jest: Jest is a framework for testing JavaScript. It is popular to use with React and React native. Both front end and back end applications can be used, and it is one of the most popular test frameworks these days amongst big tech companies.

3. Objects: Objects are a non-primitive JS data type. They have collections of key:value pairs. The key is usually some descriptor of the type of value that is to follow (for example, name, age, address), but is actually the data type of SYMBOL. However, I also saw the key described as properties. The value is the specific value of that key, for example, ("Renita", 34, "123 Sesame St.") Objects can also contain functions, which are referred to as methods.

4. Method: Methods are functions belonging to an object. They are stored as properties of the object. They can be accessed by appending the method name to the object name 

Example:
const coffee = {
    size: "large", 
    type: "latte",
    temp: "hot",
    order: orderCoffee() {
        return coffee.size + " " + coffee.temp + " " + coffee.type;
    }
}
console.log(coffee.orderCoffee())

5. Classes:
Classes are a way to create lots of objects that follow the same template. Technically they are functions. They contain a few keywords to provide the needed information: constructor, this, and new.
Class names are always capitalized and use PascalCase, which is like camelCase but with the first letter capitalized as well.