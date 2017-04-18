# Default, Rest, Spread

Callee-evaluated default parameter values. Turn an array into consecutive arguments in a function call. Bind trailing parameters to an array. Rest replaces the need for arguments and addresses common cases more directly.

## Default
> ES6:

```js
function f(x, y=12) {
  return x + y;
}
```

> Javascript

```js
function f(x) {
  var y = arguments[1] === undefined ? 12 : arguments[1];
  return x + y;
}
```

## Rest
> ES6:

```js
function f(x, ...y) {
  return x * y.length;
}
```

> Javascript

```js
function f(x) {
  var y = Array.prototype.slice.call(arguments, 1);

  return x * y.length;
}
```

## Spread
Pass each elem of array as argument
> ES6:

```js
console.log(...[1,2,3]);
```

> Javascript

```js
console.log.apply(console, [1, 2, 3]);
```
