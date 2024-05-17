document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('pokemonSelect');
    const detailsDiv = document.getElementById('pokemonDetails');
    const tableBody = document.getElementById('pokemonTable').getElementsByTagName('tbody')[0];

    // Fetching initial list of Pokémon from the PokéAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(pokemon => {
                let option = document.createElement('option');
                option.value = pokemon.url;  // Store the URL for details retrieval
                option.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                select.appendChild(option);
            });
        });

    // Function to display selected Pokémon details
    window.displayPokemonDetails = function(url) {
        if (url) {
            fetch(url)
                .then(response => response.json())
                .then(pokemon => {
                    // Create card content with Pokémon details
                    const img = document.createElement('img');
                    img.src = pokemon.sprites.front_default;
                    img.alt = pokemon.name;

                    const name = document.createElement('h3');
                    name.textContent = pokemon.name.toUpperCase();

                    const type = document.createElement('p');
                    type.textContent = 'Type: ' + pokemon.types.map(t => t.type.name).join(', ');

                    const abilities = document.createElement('p');
                    abilities.textContent = 'Abilities: ' + pokemon.abilities.map(a => a.ability.name).join(', ');

                    const addButton = document.createElement('button');
                    addButton.textContent = 'Add to Collection';
                    addButton.onclick = () => {
                        addPokemonToTable(pokemon);
                        detailsDiv.classList.add('hidden'); // Hide details after adding
                    };

                    // Clear previous details and update with new
                    detailsDiv.innerHTML = '';
                    detailsDiv.append(img, name, type, abilities, addButton);
                    detailsDiv.classList.remove('hidden');
                });
        }
    };

    // Function to add Pokémon to the table
    function addPokemonToTable(pokemon) {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" style="width:50px;"></td>
            <td>${pokemon.name.toUpperCase()}</td>
            <td>${pokemon.types.map(type => type.type.name).join(', ')}</td>
            <td>${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</td>
            <td>
                <button onclick="this.parentElement.parentElement.remove()">Remove</button>
            </td>
        `;
    }
});