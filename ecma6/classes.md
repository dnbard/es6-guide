#Classes

ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.

> ES6:

```js
class SkinnedMesh{
  update(camera) { }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

> Javascript

```js
function SkinnedMesh() {}

SkinnedMesh.prototype.update = function update(camera) { };

SkinnedMesh.defaultMatrix = function defaultMatrix() {
  return new THREE.Matrix4();
};
```

##Constructor

> ES6:

```js
class SkinnedMesh {
  constructor(geometry, materials) {
    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
  }
  update(camera) {

  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

> Javascript

```js
function SkinnedMesh(geometry, materials) {
  this.idMatrix = SkinnedMesh.defaultMatrix();
  this.bones = [];
  this.boneMatrices = [];
}

SkinnedMesh.prototype.update = function update(camera) {
  Function.prototype.update.call(this);
};

SkinnedMesh.defaultMatrix = function defaultMatrix() {
  return new THREE.Matrix4();
};
```

##Extends

> ES6:

```js
class SkinnedMesh extends THREE.Mesh {
  update(camera) {
    super.update();
  }
}
```

> Javascript

```js
var _inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

function SkinnedMesh() {
  if (_THREEMesh != null) {
    _THREEMesh.apply(this, arguments);
  }
}

_inherits(SkinnedMesh, _THREEMesh);

SkinnedMesh.prototype.update = function update(camera) {
  THREEMesh.prototype.update.call(this);
};
```