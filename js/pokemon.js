document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('pokemonSelect');
    const detailsDiv = document.getElementById('pokemonDetails');
    const tableBody = document.getElementById('pokemonTable').getElementsByTagName('tbody')[0];
    const pokemonPopup = document.getElementById('pokemonPopup');
    const pokemonCardContent = pokemonPopup.querySelector('.pokemon-card-content');
    const removeBtn = pokemonPopup.querySelector('.remove-btn');
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

            const pokemonName = capitalizedWords(pokemon.name);

            const img = document.createElement('img');
            img.src = pokemon.sprites.front_default;;
            img.alt = pokemonName;

            const name = document.createElement('h3');
            name.textContent = `${pokemonName} #${pokemon.id}`;

            const types = document.createElement('p');
            types.textContent = 'Type: ' + pokemon.types.map(t => capitalizedWords(t.type.name)).join(', ');

            const abilities = document.createElement('p');pokemon.abilities.forEach(ability => ability.ability.name = ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1));
            abilities.textContent = 'Abilities: ' + pokemon.abilities.map(a => capitalizedWords(a.ability.name)).join(', ');

            const height = document.createElement('p');
            height.textContent = 'Height: ' + convertDecimetersToFeetWithInches(pokemon.height);

            const weight = document.createElement('p');
            weight.textContent = 'Weight: ' + convertDecagramsToPounds(pokemon.weight);

            targetDiv.append(img, name, types, abilities, height, weight);

            pokemon.stats.forEach(s => {
                const p = document.createElement('p');
                p.textContent = `${capitalizedWords(s.stat.name)}: ${s.base_stat}`;
                targetDiv.appendChild(p);
            });

            if (showAddButton) {
                const addButton = document.createElement('button');
                addButton.textContent = 'Add Pokémon';
                addButton.addEventListener('click', () => {
                    addPokemonToTable(pokemon, url);
                    detailsDiv.classList.add('hidden');
                });
                targetDiv.append(addButton);
            }
            targetDiv.classList.remove('hidden');
        }
    };

    const convertDecimetersToFeetWithInches = (decimeters) => {
        const totalInches = decimeters * 3.937;
        const feet = Math.floor(totalInches / 12);
        const inches = Math.round(totalInches % 12);
        return `${feet}'${inches}"`;
    }

    const capitalizedWords = (string) => {
        const words = string.split('-');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return capitalizedWords.join(' ');
    }

    const convertDecagramsToPounds = (decagrams) => {
        const totalPounds = decagrams * 0.22046;
        return `${totalPounds.toFixed(1)} lbs`;
    }

    const addPokemonToTable = (pokemon, url) => {
        const pokemonName = capitalizedWords(pokemon.name);
        const row = tableBody.insertRow();
        row.setAttribute('data-url', url); // Store URL in data attribute
        row.innerHTML = `
            <td><img src="${pokemon.sprites.front_default}" alt="${pokemonName}"></td>
            <td>${pokemonName}</td>
        `;
        row.addEventListener('click', () => {
            const pokemonUrl = row.getAttribute('data-url');
            displayPokemonDetails(pokemonUrl, pokemonCardContent, false);
            // Store row index in data attribute
            pokemonCardContent.setAttribute('data-row', row.rowIndex);
            // Hide the add button in the popup
            pokemonPopup.classList.remove('hidden');
        });
    };

    removeBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const rowIndex = pokemonCardContent.getAttribute('data-row');
        const row = tableBody.rows[rowIndex - 1]; // rowIndex is 1-based
        row.remove();
        pokemonPopup.classList.add('hidden');
    });

    closePopup.addEventListener('click', () => {
        pokemonPopup.classList.add('hidden');
    });

    select.addEventListener('change', (event) => displayPokemonDetails(event.target.value));

    fetchPokemonList();
});