

// Condiciones iniciales para el Fetch//
const urlAPI='https://pokeapi.co/api/v2/pokemon'
const options = {
	method: 'GET'
};


const totalPokemons= 1008
function generateRandomId() {
    return Math.floor(Math.random() * totalPokemons);
}
  
 async function fetchRandomPokemon(){
    let id = generateRandomId();
    const getpokemon =  await fetch(`${urlAPI}/${id}`, options);
    const getPokemonJs = await getpokemon.json();
    return getPokemonJs.sprites.other.home.front_default;
}

const generatenewPokemon = async ()=>{
    const src =  await fetchRandomPokemon();
    if ( src === null){
        
        generatenewPokemon()
    }else{
        const pokeimage = document.querySelector(".imgpokemon")
        console.log(pokeimage)
        pokeimage.src = src
    }
}

const boton = document.querySelector(".generate")
boton.addEventListener("click", generatenewPokemon)
console.log(boton)

generatenewPokemon();















	