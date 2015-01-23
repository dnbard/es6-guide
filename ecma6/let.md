#Let, Const

Block-scoped binding constructs. let is the new var. const is single-assignment. Static restrictions prevent use before assignment.


> ES6:

```js
function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      x = "foo";
    }
    // error, already declared in block
    let x = "inner";
  }
}
```
