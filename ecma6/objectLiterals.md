# Enhanced Object Literals

Object literals are extended to support setting the prototype at construction, shorthand for foo: foo assignments, defining methods and making super calls. Together, these also bring object literals and class declarations closer together, and let object-based design benefit from some of the same conveniences.

## Shorthands
> ES6:

```js
var obj = {
    handler
};
```

> Javascript

```js
var obj = {
  handler: handler
};
```

## Methods
> ES6:

```js
var obj = {
  toString() {
    return "null";
  }
};
```

> Javascript

```js
var obj = {
  toString: function toString() {
    return "null";
  }
};
```

## Computed (dynamic) property names
> ES6:

```js
var obj = {
  [ 'prop_' + (() => 42)() ]: 42
};
```

> Javascript

```js
var obj = {};

obj["prop_" + (function () {
  return 42;
})()] = 42;
```