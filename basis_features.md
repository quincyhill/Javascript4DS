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

Note that we used `let` rather than the older `var` and `of` rather than `in`: the latter returns the indexes of the collection (e.g., 0, 1, 2), which has some traps for the unwary. Simlar to enumerate in python execpt its just the enum value.

Note that indexing starts from 0 rather than 1, and that indentation is optional and for readability purposes only. This may be different from the langauge that you're used to.
