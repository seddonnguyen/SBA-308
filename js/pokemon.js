document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('pokemonSelect');
    const detailsDiv = document.getElementById('pokemonDetails');
    const tableBody = document.getElementById('pokemonTable').getElementsByTagName('tbody')[0];
    const pokemonPopup = document.getElementById('pokemonPopup');
    const pokemonCardContent = pokemonPopup.querySelector('.pokemon-card-content');
    const closePopup = document.getElementById('closePopup');

    const fetchPokemonList = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();

        const sortedPokemon = data.results.sort((a, b) => a.name.localeCompare(b.name));

        sortedPokemon.forEach(pokemon => {
            const option = document.createElement('option');
            option.value = pokemon.url;
            option.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            select.appendChild(option);
        });
    };

    const displayPokemonDetails = async (url, targetDiv = detailsDiv, showAddButton = true) => {
        if (url) {
            const response = await fetch(url);
            const pokemon = await response.json();

            targetDiv.innerHTML = '';

            const img = document.createElement('img');
            img.src = pokemon.sprites.front_default;
            img.alt = pokemon.name;

            const name = document.createElement('h3');
            name.textContent = pokemon.name.toUpperCase();

            // Capitalize the first letter of each word for all the pokemon attributes
            pokemon.types.forEach(type => type.type.name = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1));
            pokemon.abilities.forEach(ability => ability.ability.name = ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1));
            pokemon.stats.forEach(stat => stat.stat.name = stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1));

            const type = document.createElement('p');
            type.textContent = 'Type: ' + pokemon.types.map(t => t.type.name).join(', ');

            const abilities = document.createElement('p');
            abilities.textContent = 'Abilities: ' + pokemon.abilities.map(a => a.ability.name).join(', ');

            const height = document.createElement('p');
            height.textContent = 'Height: ' + pokemon.height + ' dm';

            const weight = document.createElement('p');
            weight.textContent = 'Weight: ' + pokemon.weight + ' hg';

            const stats = document.createElement('ul');
            pokemon.stats.forEach(stat => {
                const li = document.createElement('li');
                li.textContent = `${stat.stat.name}: ${stat.base_stat}`;
                stats.appendChild(li);
            });

            if (showAddButton) {
                const addButton = document.createElement('button');
                addButton.textContent = 'Add to Collection';
                addButton.addEventListener('click', () => {
                    addPokemonToTable(pokemon, url);
                    detailsDiv.classList.add('hidden');
                });
                targetDiv.append(img, name, type, abilities, height, weight, stats, addButton);
            } else {
                targetDiv.append(img, name, type, abilities, height, weight, stats);
            }
            targetDiv.classList.remove('hidden');
        }
    };

    const addPokemonToTable = (pokemon, url) => {
        const row = tableBody.insertRow();
        row.setAttribute('data-url', url); // Store URL in data attribute
        row.innerHTML = `
            <td><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" style="width:50px;"></td>
            <td>${pokemon.name.toUpperCase()}</td>
            <td>${pokemon.types.map(type => type.type.name).join(', ')}</td>
            <td>${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</td>
            <td>${pokemon.height} dm</td>
            <td>${pokemon.weight} hg</td>
            <td>${pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</td>
            <td><button class="remove-btn">Remove</button></td>
        `;
        row.addEventListener('click', () => {
            const pokemonUrl = row.getAttribute('data-url');
            displayPokemonDetails(pokemonUrl, pokemonCardContent, false); // Hide the add button in the popup
            pokemonPopup.classList.remove('hidden');
        });
        row.querySelector('.remove-btn').addEventListener('click', (event) => {
            event.stopPropagation();
            row.remove();
        });
    };

    closePopup.addEventListener('click', () => {
        pokemonPopup.classList.add('hidden');
    });

    select.addEventListener('change', (event) => displayPokemonDetails(event.target.value));

    fetchPokemonList();
});