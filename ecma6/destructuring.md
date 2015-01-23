#Destructuring

Destructuring allows binding using pattern matching, with support for matching arrays and objects. Destructuring is fail-soft, similar to standard object lookup foo["bar"], producing undefined values when not found.

##List matching
> ES6:

```js
var [a, , b] = [1,2,3];
```

> Javascript

```js
var ref = [1, 2, 3];

var a = ref[0];
var b = ref[2];
```

##Object matching
> ES6:

```js
var { first: a, second: { something: b }, third: c } = getSomething();
```

> Javascript

```js
var _getSomething = getSomething();

var a = _getSomething.first;
var b = _getSomething.second.something;
var c = _getSomething.third;
```

##Object matching shorthand
> ES6:

```js
var { first, second, third } = getSomething();
```

> Javascript

```js
var _getSomething = getSomething();

var first = _getSomething.first;
var second = _getSomething.second;
var third = _getSomething.third;
```

##Parameter destructuring
> ES6:

```js
function g({name: x}) {
  console.log(x);
}
g({name: 5});
```

> Javascript

```js
function g(_ref) {
  var x = _ref.name;
  console.log(x);
}
g({ name: 5 });
```

##Fail-soft destructuring
> ES6:

```js
var [a] = [];
```
a === undefined;

##Fail-soft destructuring with defaults
> ES6:

```js
var [a = 1] = [];
```
a === 1;
