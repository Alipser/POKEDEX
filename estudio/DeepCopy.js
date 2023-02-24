const obj1 = {
  a: {
    a1: "a",
    a2: "a",
  },
  b: "b",
  edita() {
    this.a.a1 = "aaaaaa";
  },
};

let obj2 = {};

const isObject = (intro) => {
  return typeof intro === "object" ? true : false;
};

const isArray = (intro) => Array.isArray(intro);

const deepCopy = function (objecToCopy, pasteIn) {
  if (isObject(objecToCopy)) {
    pasteIn = {};
  } else if (isArray(objecToCopy)) {
    pasteIn = [];
  } else {
    return objecToCopy;
  }

  for (let item in objecToCopy) {
    if (isObject(objecToCopy[item])) {
      pasteIn[item] = deepCopy(objecToCopy[item], pasteIn[item]);
    } else if (isArray(objecToCopy[item])) {
      pasteIn.push(objecToCopy[item]);
    } else {
      pasteIn[item] = objecToCopy[item];
    }
  }
  return pasteIn;
};

console.log(deepCopy(obj1, obj2));

const varkasd= "asdasdas"
console.log(obj2)
