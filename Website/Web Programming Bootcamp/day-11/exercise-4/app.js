// Here are the image link examples:
// Static version: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// Animated version: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif


// This will trigger when users click on "Generate" button!
const button = document.querySelector('#generate-btn');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // ENTER YOUR CODE HERE!

    // Hints: Follow these steps:
    // Get the value of the input field with the ID 'pokemon-number'
    let pokemonNumber = document.querySelector('#pokemon-number').value;

    // Get the checked state of the checkbox with the ID 'animated-images'
    let animated = document.querySelector('#animated-images').checked;

    // Clear the contents of the element with the ID 'container'
    document.querySelector('#container').innerHTML = '';

    // Call the generatePokemon function with the retrieved values
    generatePokemon(pokemonNumber, animated);

});

function generatePokemon(pokemonNumber, animated) {
    if (animated == true) {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';
        var fileExtension = 'gif';
    }
    else {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        var fileExtension = 'png';
    }
    // ENTER YOUR CODE HERE!

    // Hints: Follow these steps:
    // Select the element with the ID 'container'
    const container = document.querySelector('#container');

    // Loop from 1 to the specified pokemonNumber
    for (let i = 1; i <= pokemonNumber; i++) {
        // Create a new div element
        let pokemon = document.createElement('div');

        // Add the 'pokemon' class to the div element
        pokemon.classList.add('pokemon');

        // Create a new span element
        let label = document.createElement('span');

        // Set the inner text of the span element to the current iteration number
        label.innerText = i;

        // Create a new img element
        let img = document.createElement('img');

        // Set the src attribute of the img element to the constructed image URL
        img.src = baseURL + i + '.' + fileExtension;

        // Append the img element to the pokemon div
        pokemon.appendChild(img);

        // Append the label span element to the pokemon div
        pokemon.appendChild(label);

        // Append the pokemon div to the container element
        container.appendChild(pokemon);
    }
}

