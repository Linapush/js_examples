function get_pokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}
get_pokemon()

function get_pokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => res.json())
    .then((data) => {
        let pokemonContainer = document.getElementById('pokemonContainer')
        // for(let pokemon of data.results) {
        //     let p = document.createElement('p');
        //     p.textContent = pokemon.name;
        //     pokemonContainer.appendChild(p);
        // }
        for(let i=0; i < data.results.lentgh; i++) {
            let p = document.createElement('p');
            p.textContent = data.results[i].name;
            pokemonContainer.appendChild(p);
        }
    })
    .catch((err) => console.error(err));
}

get_pokemon()