function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}
function createLearningPath({ name = requiredParam("name"), courses = [] }) {
  const private = { _name: name, _courses: courses };
  const public = {
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get courses() {
      return private["_courses"];
    },
  };
  return public;
}
function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = { _name: name, _learningPaths: learningPaths };
  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: { twitter, instagram, facebook },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }
      if (!newLP.courses) {
        console.warn("Tu LP no tiene courses");
        return;
      }
      if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista (*de cursos)");
        return;
      }
      private["_learningPaths"].push(newLP);
    },
  };
  return public;
}
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });