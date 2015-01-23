#Modules

Language-level support for modules for component definition. Codifies patterns from popular JavaScript module loaders (AMD, CommonJS). Runtime behaviour defined by a host-defined default loader. Implicitly async model – no code executes until requested modules are available and processed.

##Export module
> ES6

```js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
```

> Javascript

```js
exports.sum = sum;
function sum(x, y) {
  return x + y;
}
var pi = exports.pi = 3.141593;
```

##Import module
> ES6:

```js
import * as math from "lib/math";
```

> Javascript

```js
var math = require("lib/math");
```

##Export default
> ES6:

```js
export default function(x) {
    return Math.exp(x);
}
```

> Javascript

```js
module.exports = function (x) {
  return Math.exp(x);
};
```