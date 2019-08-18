// const crypto = require("crypto");

const getHash = key => {
  return Array.from(key).reduce(
    (acc, curr) => acc + parseInt(curr.charCodeAt(0), 16),
    0
  );
};

class Hash {
  constructor() {
    this.tableLength = 100;
    this.table = new Array(this.tableLength);
  }

  set(key, value) {
    const index = getHash(key) % this.tableLength;
    if (this.table[index]) {
      console.log("collision!", key);
      // avoidCollision
    } else {
      this.table[index] = value;
    }
  }

  get(key) {
    return this.table[getHash(key) % this.tableLength];
  }
}

console.log(getHash("abc"));

const hash = new Hash();
for (let i = 0; i <= 100; i++) {
  console.log(i);
  hash.set(String.fromCharCode(Math.floor(Math.random() * 100)), 123);
}
console.log(hash.get("abc"));
