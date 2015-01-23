#ECMAScript 6 Features

##Arrows

Arrows are a function shorthand using the => syntax. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript. They support both expression and statement bodies. Unlike functions, arrows share the same lexical this as their surrounding code.

> ES6:

```
var odds = evens.map(v => v + 1);

var nums = evens.map((v, i) => v + i);
```

> Javascript

```
var odds = evens.map(function (v) {
  return v + 1;
});

var nums = evens.map(function (v, i) {
  return v + i;
});
```