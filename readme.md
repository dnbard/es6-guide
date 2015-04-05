#ECMAScript 6 Features

###[Arrows](https://github.com/dnbard/es6-guide/blob/master/ecma6/arrows.md)
Arrows are a function shorthand using the => syntax. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript. They support both expression and statement bodies. Unlike functions, arrows share the same lexical this as their surrounding code.

###[Classes](https://github.com/dnbard/es6-guide/blob/master/ecma6/classes.md)
ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.

###[Enhanced Object Literals](https://github.com/dnbard/es6-guide/blob/master/ecma6/objectLiterals.md)
Object literals are extended to support setting the prototype at construction, shorthand for foo: foo assignments, defining methods and making super calls. Together, these also bring object literals and class declarations closer together, and let object-based design benefit from some of the same conveniences.

###[Template Strings](https://github.com/dnbard/es6-guide/blob/master/ecma6/templateStrings.md)
Template strings provide syntactic sugar for constructing strings. This is similar to string interpolation features in Perl, Python and more. Optionally, a tag can be added to allow the string construction to be customized, avoiding injection attacks or constructing higher level data structures from string contents.

###[Destructuring](https://github.com/dnbard/es6-guide/blob/master/ecma6/destructuring.md)
Destructuring allows binding using pattern matching, with support for matching arrays and objects. Destructuring is fail-soft, similar to standard object lookup foo["bar"], producing undefined values when not found.

###[Default, Rest, Spread](https://github.com/dnbard/es6-guide/blob/master/ecma6/default.md)
Callee-evaluated default parameter values. Turn an array into consecutive arguments in a function call. Bind trailing parameters to an array. Rest replaces the need for arguments and addresses common cases more directly.

###[Let, Const](https://github.com/dnbard/es6-guide/blob/master/ecma6/let.md)
Block-scoped binding constructs. let is the new var. const is single-assignment. Static restrictions prevent use before assignment.

###[Iterators, For..Of](https://github.com/dnbard/es6-guide/blob/master/ecma6/iterators.md)
Iterator objects enable custom iteration like CLR IEnumerable or Java Iterable. Generalize for..in to custom iterator-based iteration with for..of. Don’t require realizing an array, enabling lazy design patterns like LINQ.

###[Generators](https://github.com/dnbard/es6-guide/blob/master/ecma6/generators.md)
Generators simplify iterator-authoring using function* and yield. A function declared as function* returns a Generator instance. Generators are subtypes of iterators which include additional next and throw. These enable values to flow back into the generator, so yield is an expression form which returns a value (or throws).

###[Modules](https://github.com/dnbard/es6-guide/blob/master/ecma6/modules.md)
Language-level support for modules for component definition. Codifies patterns from popular JavaScript module loaders (AMD, CommonJS). Runtime behaviour defined by a host-defined default loader. Implicitly async model – no code executes until requested modules are available and processed.

#ECMAScript 7 Features

###[Array Comprehensin][https://github.com/dnbard/es6-guide/blob/master/ecma6/arrayComprehension.md]
The array comprehension syntax is a JavaScript expression which allows you to quickly assemble a new array based on an existing one.