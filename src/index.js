'use strict'

class C {
  #x = 42;
  x() {
    return this.#x;
  }
}

console.log(new C().x())

module.exports = C
