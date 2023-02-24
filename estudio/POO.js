class animal {
  constructor(decir) {
    this.decir = decir;
  }
  prueba() {
    console.log(this.decir);
  }
}

const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
 prueba(){
    console.log(this.name)
 }
  
};



// console.log(Object.keys(juan))
// console.log(Object.getOwnPropertyNames(juan))
 console.log(Object.entries(juan))
// console.log(Object.getOwnPropertyDescriptors(juan))

Object.defineProperty(juan, "Padre", {
  value: "Romario",
  writable: "false", // no permite reescribir el valor de la variable pero si eliminarla
  enumerable: "false", //si enumerable es false no se veran en object.keys
  configurable: "false", // nos impide borrar propiedades del objeto
});

Object.defineProperty(juan, "Madre", {
  value: "Tefa",
  writable: "true",
  enumerable: "true",
  configurable: "true",
});

console.log(Object.getOwnPropertyDescriptors(animal));

const obj1 = {
  a: {
    a1:"a",
    a2: "a"
  },
  b: "b",
  edita(){
    this.a.a1="aaaaaa"
  }
};

let obj2 = {};


//_________________________________________________________________\\
function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function deepCopy(subject) {
    let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (let key in subject) {
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
  
  const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      twitter: undefined,
      instagram: undefined,
      facebook: undefined,
    },
  };
  
    obj2 = deepCopy(obj1);
  console.log(obj2)

  ///

function consoleo(i) {
  i++;
  if (i < 5) {
    console.log(i);
    return consoleo(i);
  } else {
    return i;
  }
}

console.log(consoleo(3));
