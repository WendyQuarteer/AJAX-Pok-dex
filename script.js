//add eventListener for when user clicks the button.
document.getElementById("run").addEventListener("click", () => {
    //get the value from the input-field.
    const input = document.getElementById("pokemon").value;
    //call the function getData which is going to relate on the input-value.
    getData(input).catch(error => alert("No such Pokemon found!" + error));
});

//concatenate the input (=string) with he API url.
async function getData(string) {
    //fetch the pokeAPI and await operator for promise.
    const response1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + string);
    //await promise to get data1.
    const data1 = await response1.json();
    //show data in console.  This only shows an array with the total of all pokemons with all pokemons inside: results.
    //console.log(data1);

    //fetch the pokeApi species.
    const response2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + string);
    //await promise to get data2.
    const data2 = await response2.json();
    //console.log(data2);

    //make variable to get the evolution-chain.
    const evoChain = data2.evolution_chain;
    //console.log(evoChain);
    //make variable to get the object value.
    const evolution = Object.values(evoChain);
    //console.log(evolution);
    //fetch the object value = url.
    const response3 = await fetch(`${evolution}`);
    //console.log(response3)
    //await promise to get data3.
    const data3 = await response3.json();
    //console.log(data3);
    const chain1 = data3.chain;
    //console.log(chain1);
    const species1 = chain1.species;
    console.log(species1);
    //const pokeEv1Img = species1.url;
    //console.log(pokeEv1Img);

    //fetch the pokemon-id.
    const id = data1.id;
    //console.log(id);
    //get the pokemon-name.
    const name = data1.name;
    //console.log(name);
    //get the pokemon pictures.
    const sprites = data1.sprites;
    //console.log(sprites);
    //display first image in console
    const img = Object.values(sprites)[0];
    //console.log(img);
    //get the array of the moves objects.
    const moves = data1.moves;
    //console.log(moves);
    //display a list from: move, of the array of objects.
    const pokeMoves = moves.map(({move}) => move);
    //console.log(pokeMoves);
    //create a new random array, to display 4 random numbers for the length of pokeMoves
    let randomArray = Array.from({length: 4}, () => Math.floor(Math.random() * pokeMoves.length));
    //console.log(randomArray);
    //link each random number to a random pokeMove.
    let randPokeMoves = "";
    for (let i = 0; i < randomArray.length; i++) {
        randPokeMoves += pokeMoves[randomArray[i]].name + '\r\n';
    }
    //console.log(randPokeMoves);
    //make variable for the template.
    const template = document.getElementById("pokeFound");
    //console.log(template + " template");
    //make variable for target.
    const target = document.getElementById("target");
    //console.log(target + " target");
    //make variable to clone the template.
    const clone = template.content.cloneNode(true);
    //console.log(clone.innerHTML + " clone");
    clone.querySelector(".name").innerText = name;
    clone.querySelector(".id").innerText = id;
    clone.querySelector(".moves").innerText = randPokeMoves;
    clone.querySelector(".img").src = img;
    //clone.querySelector(".Ev1Img").src = ;
    //clone the template and insert it in the ol.
    target.appendChild(clone);
}


