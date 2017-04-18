# Template Strings

Template strings provide syntactic sugar for constructing strings. This is similar to string interpolation features in Perl, Python and more. Optionally, a tag can be added to allow the string construction to be customized, avoiding injection attacks or constructing higher level data structures from string contents.

## Multiline strings

> ES6:

```js
`In JavaScript this is
 not legal.`
```

> Javascript

```js
"In JavaScript this is\n not legal.";
```

## Templating

> ES6:

```js
var name = "Bob", time = "today";
var query = `Hello ${name}, how are you ${time}?`
```

> Javascript

```js
var name = "Bob",
    time = "today";
var query = "Hello " + name + ", how are you " + time + "?";
```