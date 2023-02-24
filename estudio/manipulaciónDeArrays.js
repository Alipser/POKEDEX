// For EACHes un metodo statico de los objetos ARRAY
var words = [1,2,3,4];

words.forEach(function(word) {return (word*=2);
})

console.log(words)

// cuidado con map y los objetos dentro de la memoria

words.reduce((sum, item)=> sum + item)
console.log(words.reduce((sum, item)=> sum + item))
console.log(words)

// flat witth recusivity
const matriz = [
    ["a" , "b", "c"],
    "a","roma",
    ["a", ["b" ,"c"], "d"]


]

function profundidad(list){
    let newList= [];
    if (typeof list != "object"){ return [list]}
    list.forEach(e => {
        newList= newList.concat(profundidad(e))
    })
    return newList;
}

const newArray =profundidad(matriz)
console.log(newArray)
function flat(e){
    let flatten = []
        function helper(e){
        e.forEach(subE =>{
            if(Array.isArray(subE) ){
                helper(subE)
                
            }else{
                flatten.push(subE)
            }
        })}
        helper(e)
    return flatten
}

const flatted = flat(matriz)
console.log(flatted)

const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array.flat();
console.log(rta)