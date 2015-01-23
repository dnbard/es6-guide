#Arrows

Arrows are a function shorthand using the => syntax. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript. They support both expression and statement bodies. Unlike functions, arrows share the same lexical this as their surrounding code.

##Expression bodies

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

##Statement bodies

> ES6:

```
nums.forEach(v => {
    fives.push(v);
});
```

> Javascript

```
nums.forEach(function (v) {
  fives.push(v);
});
```

##Lexical `this`
> ES6:

```
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}
```

> Javascript

```
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends: function() {
    var _this = this;
    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};
```