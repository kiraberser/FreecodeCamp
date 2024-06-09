//Agregar a variables los diferentes ID
const clickBtn = document.getElementById("search-button");
const input = document.getElementById("search-input");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const typesContainer = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");

//Url sobre la que vamos a pedir peticiones
const pokemonSkills = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id}';

// Ocupar fetch para hacer una peticion de la API de pokemon

const fetchPokemon = async (query) => {
    try {
        const res = await fetch(pokemonSkills.replace("{name-or-id}", query.toLowerCase()));
        if(!res.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await res.json();
        return data;
    }catch(err) {
        alert(err.message);
    }
};

const capitalizeFirstLetter = (str) => {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};


//En base a la información que adquirimos por la API agregar los datos a nuestra intefaz segun su ID
const updatePokemonInfo = (pokemon) => {
    pokemonName.innerText = capitalizeFirstLetter(pokemon.name);
    pokemonId.innerText = `#${pokemon.id}`;
    weight.innerText = `Weight: ${pokemon.weight}`;
    height.innerText = `Height: ${pokemon.height}`;

    typesContainer.innerHTML = '';
    // Add new types
    pokemon.types.forEach(typeInfo => {
        const typeSpan = document.createElement("span");
        typeSpan.innerText = typeInfo.type.name.toUpperCase();
        typesContainer.appendChild(typeSpan);
    });


    hp.innerText = pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat;
    attack.innerText = pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat;
    defense.innerText = pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat;
    specialAttack.innerText = pokemon.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
    specialDefense.innerText = pokemon.stats.find(stat => stat.stat.name === 'special-defense').base_stat;
    speed.innerText = pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat;

    let spriteImg = document.getElementById("sprite");
    if (!spriteImg) {
        spriteImg = document.createElement("img");
        spriteImg.id = "sprite";
        spriteContainer.appendChild(spriteImg);
    }
    spriteImg.src = pokemon.sprites.front_default;

};

//Seleccion del boton, investiga el valor del input, checa si es que se encuentra, llama a la funcion para remplazar el url y los datos, pasa los datos a la siguiente funcion para remplazarlos en la interfaz
const searchPokemon = async () => {
    const query = input.value.trim();
    if(!query){
        alert("Pokémon not found");
        return
    }

    const pokemon = await fetchPokemon(query)
    if(pokemon){
        updatePokemonInfo(pokemon);
    }
};

clickBtn.addEventListener("click", searchPokemon);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        searchPokemon();
    }
})
