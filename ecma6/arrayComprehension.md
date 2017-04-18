# Array Comprehension

The array comprehension syntax is a JavaScript expression which allows you to quickly assemble a new array based on an existing one. Comprehensions exist in many programming languages and the upcoming *ECMAScript 7* standard defines array comprehensions for JavaScript.

> ES7:

```js
[for (num of [ 1, 4, 9 ]) Math.sqrt(num)];
```

> Javascript

```js
[ 1, 4, 9 ].map(function(a){ return Math.sqrt(a) });
```

> ES7:

```js
[for (x of [ 1, 2, 3]) for (y of [ 3, 2, 1 ]) x*y]
```

> Javascript

```js
var a = [ 1, 2, 3],
    b = [ 3, 2, 1 ],
    result = [];

for (var i = 0; i < a.length; i ++)
    for (var j = 0; j < b.length; j ++)
        result.push(a[i] * b[j]);
```