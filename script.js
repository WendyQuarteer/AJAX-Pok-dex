//add eventListener for when user clicks the button.
document.getElementById("run").addEventListener("click", () => {
    //get the value from the input-field.
    const input = document.getElementById("pokemon").value;
    //call the function getData which is going to relate on the input-value.
    getData(input).catch(error => {
        alert("No such Pokemon found!" + error)
        console.log('Error Fetching pokemon')
        console.log(error)
    });
});


//make variable for the template.
const template = document.getElementById("pokeFound");
//console.log(template + " template");
//make variable for target.
const target = document.getElementById("target");
//console.log(target + " target");
//make variable to clone the template.
const clone = template.content.cloneNode(true);
//console.log(clone.innerHTML + " clone");


//concatenate the input (=string) with he API url.
async function getData(string) {
    //fetch the pokeAPI and await operator for promise.
    const response1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + string);
    //await promise to get data1.
    const data1 = await response1.json();
    //show data in console.  This only shows an array with the total of all pokemons with all pokemons inside: results.
    console.log(data1);

    //get the requested pokemon.
    //fetch the pokemon-id.
    const id = data1.id;
    //console.log(id);
    //get the pokemon-name.
    const name = data1.name;
    //console.log(name);
    //get the pokemon pictures.
    const sprites = data1.sprites;
    console.log(sprites);
    //display first image in console
    const img = sprites.front_default;
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

    //fetch the object evolution.
    const response3 = await fetch(`${evolution}`);
    //console.log(response3)
    //await promise to get data3.
    const data3 = await response3.json();
    //console.log(data3);

    //get the name of evolution 1.
    const chain = data3.chain;
    //console.log(chain1);
    const species1 = chain.species;
    //console.log(species1);
    const pokeEv1Name = species1.name;
    //console.log(pokeEv1Name);
    //fetch the pokeAPI and await operator for promise.
    const response4 = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeEv1Name);
    //await promise to get data4.
    const data4 = await response4.json();
    //show data in console.  This only shows an array with the total of all pokemons with all pokemons inside: results.
    //console.log(data4);
    const sprites1 = data4.sprites;
    //console.log(sprites1);
    //display image in console
    const img1 = sprites1.front_default;
    //console.log(img1);
    clone.querySelector(".Ev1Img").src = img1;

   if (chain.evolves_to.length !== 0) {
        //get the name of evolution 2.
        const evolvesTo = chain.evolves_to;
        //console.log(evolvesTo);
        const evolvesTo0 = evolvesTo[0];
        //console.log(evolvesTo0);
        const species2 = evolvesTo0.species;
        //console.log(species2);
        const pokeEv2Name = species2.name;
        //console.log(pokeEv2Name);
        //fetch the pokeAPI and await operator for promise.
        const response5 = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeEv2Name);
        //await promise to get data5.
        const data5 = await response5.json();
        //show data in console.  This only shows an array with the total of all pokemons with all pokemons inside: results.
        //console.log(data5);
        const sprites2 = data5.sprites;
        //console.log(sprites2);
        //display image in console
        const img2 = sprites2.front_default;
        //console.log(img2);
        clone.querySelector(".Ev2Img").src = img2;

        if (evolvesTo0.evolves_to.length !==0) {
            //get the name of evolution 3.
            const evolvesToTo = evolvesTo0.evolves_to;
            //console.log(evolvesToTo);
            const evolvesToTo0 = evolvesToTo[0];
            //console.log(evolvesToTo0);
            const species3 = evolvesToTo0.species;
            //console.log(species3);
            const pokeEv3Name = species3.name;
            //console.log(pokeEv3Name);
            //fetch the pokeAPI and await operator for promise.
            const response6 = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeEv3Name);
            //await promise to get data6.
            const data6 = await response6.json();
            //show data in console.  This only shows an array with the total of all pokemons with all pokemons inside: results.
            //console.log(data6);
            const sprites3 = data6.sprites;
            //console.log(sprites3);
            //display image in console
            const img3 = sprites3.front_default;
            //console.log(img3);
            clone.querySelector(".Ev3Img").src = img3;
        }
    }

    clone.querySelector(".name").innerText = name;
    clone.querySelector(".id").innerText = id;
    clone.querySelector(".moves").innerText = randPokeMoves;
    clone.querySelector(".img").src = img;

    //clone the template and insert it in the ol.
    //Right before container will be filled, empty container.
    target.innerHTML = " ";
    target.appendChild(clone);
}


