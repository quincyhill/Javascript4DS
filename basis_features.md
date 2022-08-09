## **Basic Features**

Just the core features of JavaScript, running programs, basic data types, arrays, objects, loops, conditionals, functions and modules.

Mainly exists as a refresher and to cover anything that I've missed.

`console` is a built-in module that provides basic printing services (and other stuff).

### **Basic Data Types**

Javascript has the usual datatypes, though unlike C, Python, and many others, there is no seperate type for integers:

It stores all numbers as 64-bit floating point values, which is accurate upto 15 decimal digits.

We can check this using `typeof`, which returns a string. (Note: `typeof` is an operator, _not_ a function)

It means its used like `typeof dress` as opposed to `typeof(dress)`.

We use it alongside `const` below, which itself is helpful when we want to give a name to a constant value.

```javascript
const aNumber = 123.45
console.log('The type of', aNumber, 'is', typeof aNumber)
```

<hr/>
the type of 123.45 is number
<hr/>

```javascript
const anInteger = 123
console.log('the type of', anInteger, 'is', typeof anInteger)
```

<hr/>
the type of 123 is number
<hr/>

We have already met string, which may contain any Unicode character

```javascript
const aString = 'some text'
console.log('the type of', aString, 'is', typeof aString)
```

<hr/>
the type of some text is string
<hr/>

Functions are also a type of data, a fact whose implications we will explore in Chapter 3:

```javascript
console.log('the type of', console.log, 'is', typeof console.log)
```

<hr/>
the type of [Function: log] is function
<hr/>

Rather than showing the other basic type one by one, we will put three values in a list and loop over it:

```javascript
const otherValues = [true, undefined, null]
for (let value of otherValues) {
  console.log('the type of', value, 'is', typeof value)
}
```

<hr/>
the type of true is boolean
the type of undefined is undefined
the type of null is object
<hr/>

As the example above shows, we can create an array of values to loop through called `otherValues`. We initiate our loop with the word `for`.

Within the parenthesis, `let` creates a variable called `value` to iterate over each element within `otherValues`, and `value` is the changing array value of `otherValues`.

Finally, within the curly braces we perform our desired operation on every value.

Note that we used `let` rather than the older `var` and `of` rather than `in`: the latter returns the keys of the collection (e.g., 0, 1, 2), which has some traps for the unwary.

The `of` returns the values instead of the keys of `in`. This is important to know.

Note that indexing starts from 0 rather than 1, and that indentation is optional and for readability purposes only. This may be different from the langauge that you're used to.

#### Constants vs Variables.

You should make things constants unless they really need to be variables because it's easier for both people and computers to keep track of things that are defined once and never change.

After all this, the types themselves are somewhat anticlimactic. JavaScript's `boolean` type can be either `true` or `false`, though we will see below that other things can be treated as booleans.

`undefined` means "hasn't been given a value", while `null` means "has a value, which is nothing".

#### **Control Flow**

We have already seen `for` loops and flat arrays, so let's have a look at nested arrays and conditionals, We start with arrays that contain other arrays, which are usually processed by nested loops.

Javascript has some weird ideas for what things are truthy and falsy, also array are heterogeneous.

#### Saftey Tip

Always use `===` and `!==` when testing for equality and inequality in Javascript, `==` and `!=` do type conversion, which can do ugly suprises.

We can interpolate values into a back-quoted string.

#### **Objects**

An object in JavaScript is a collection of key-value pairs. Equivalent to what in Python would be a dictionary.

#### **Functions**

An oddity in javascript is how nearly any type can be compared with other types which can result in just werid results.

Alot of more modern javascript consists of callables or functions being assigned to a variable instead of denoting it `function` due to the former's odd interactions with other features of the langauge.

Each function has scope no matter how its defined and all paramters and variables inside it are local to it only.

#### Why arrow functions?

The reasoning is to have a more shorthand way of writing functions, it also couldn't change the behavior of the old `function` without breaking legacy code and the web by extension.

#### **Modules**

As our programs grow larger, we will want to put code in multiple files. The unavoidable bad news is that JavaScript has several module systems.

Node still uses on called CommonJS, but is converting to the modern standard called ES6, so what we use on the command line is different from what we use in the browser (for now).

JavaScript's offical name is ECMASCript, though only people who use the word "datum" in every conversation ever call it that. Successive versions of the language are therfore known as ES5, ES6, and so on, except when they're referred to as (for example) ES2018.

Since we're doing JavaScript using node before the browser, we will be using its module system first.

We will start by putting this code into a file named `utilities.js`
