const createStudent = function({
    name,
    apellido,
    carrera,
    padre,
    madre,
    tio

}){    
    return {
        name,
        changename(name){
            this.name=name

        },
        apellido,
        carrera,
        familia: {
            padre,
            madre,
            tio,
        }

    }

}

let romario = createStudent({
    name: "roma",
    madre: "Zobe"
})

console.log(romario)