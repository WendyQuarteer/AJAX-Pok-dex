
//concatenate the input (=string) with he API url.
async function getData(string) {
    //fetch teh pokeAPI and await operator for promise.
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + string);
    //await promise to get data.
    const data = await response.json();
    //show data in console.  This only shows an array with the total of all pokemons with all pokemons inside: results.
    console.log(data);
    //get the pokemon-id.
    const id = data.id;
    console.log(id);
    //get the pokemon-name.
    const name = data.name;
    console.log(name);
    //get the pokemon pictures.
    const sprites = data.sprites;
    console.log(sprites);
    //display first image in console
    const img = Object.values(sprites)[0];
    console.log(img);
    //get the array of the moves objects.
    const moves = data.moves;
    console.log(moves);
    //create a list from: move, of the array of objects.
    const pokeMoves = moves.map(({move}) => move);
    console.log(pokeMoves);

}


//add even for when user clicks the button.
document.getElementById("run").addEventListener("click", () => {
    //get the value from the input-field.
    const input = document.getElementById("pokemon").value;
    //call the function getData which is going to relate on the input-value.
    getData(input).catch(error => alert("No such Pokemon found!"));
});