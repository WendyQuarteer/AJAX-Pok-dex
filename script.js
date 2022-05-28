document.getElementById('run').addEventListener('click', () => { //add eventListener for when user clicks the button.
    let input = document.getElementById('pokemon').value; //get the value from the input-field.
    getData(input).catch(error => { //call the function getData which is going to relate on the input-value.
        alert('No such Pokemon found!')
        console.log('Error Fetching pokemon')
        console.log(error)
    });
});


async function getData(string) { //concatenate the input (=string) with he API url.
    const response1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + string); //fetch the pokeAPI and await operator for promise.
    const data1 = await response1.json();  //await promise to get data1.

    const id = data1.id; //get the requested pokemon. //fetch the pokemon-id.
    const name = data1.name; //get the pokemon-name.
    const sprites = data1.sprites; //get the pokemon pictures.
    const img = sprites.front_default;
    const evImg = document.createElement('img');
    evImg.src = img;
    document.getElementById('pokePic').innerHTML = "";//make sure the element is empty before adding img.
    document.getElementById('pokePic').appendChild(evImg);
    const moves = data1.moves; //get the array of the moves objects.
    const pokeMoves = moves.map(({move}) => move); //display a list from: move, of the array of objects.
    let randomArray = Array.from({length: 4}, () => Math.floor(Math.random() * pokeMoves.length)); //create a new random array, to display 4 random numbers for the length of pokeMoves
    let randPokeMoves = ""; //link each random number to a random pokeMove.
    for (let i = 0; i < randomArray.length; i++) {
        randPokeMoves += pokeMoves[randomArray[i]].name + '\r\n';
    }

    const response2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + string); //fetch the pokeApi species.
    const data2 = await response2.json(); //await promise to get data2.

    const evoChain = data2.evolution_chain; //make variable to get the evolution-chain.
    const evolution = Object.values(evoChain); //make variable to get the object value.

    const response3 = await fetch(`${evolution}`); //fetch the object evolution.
    const data3 = await response3.json(); //await promise to get data3.

    const chain = data3.chain; //get the name of evolution 1.
    const species1 = chain.species;
    const pokeEv1Name = species1.name;
    const response4 = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeEv1Name); //fetch the pokeAPI and await operator for promise.
    const data4 = await response4.json(); //await promise to get data4.
    const sprites1 = data4.sprites;
    const img1 = sprites1.front_default;
    const evImg1 = document.createElement('img'); //create new img-element.
    evImg1.src = img1;
    document.getElementById('evoPics').innerHTML = ""; //clear the images from last search so they don't add-up.
    document.getElementById('evoPics').appendChild(evImg1);

    if (chain.evolves_to.length !== 0) { //get the name of evolution 2.
        const evolvesTo = chain.evolves_to;
        const evolvesTo0 = evolvesTo[0];
        const species2 = evolvesTo0.species;
        const pokeEv2Name = species2.name;
        const response5 = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeEv2Name); //fetch the pokeAPI and await operator for promise.
        const data5 = await response5.json(); //await promise to get data5.
        const sprites2 = data5.sprites;
        const img2 = sprites2.front_default;
        const evImg2 = document.createElement('img'); //create new img-element.
        evImg2.src = img2;
        document.getElementById('evoPics').appendChild(evImg2);

        if (evolvesTo0.evolves_to.length !== 0) { //get the name of evolution 3.
            const evolvesToTo = evolvesTo0.evolves_to;
            const evolvesToTo0 = evolvesToTo[0];
            const species3 = evolvesToTo0.species;
            const pokeEv3Name = species3.name;
            const response6 = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeEv3Name); //fetch the pokeAPI and await operator for promise.
            const data6 = await response6.json(); //await promise to get data6.
            const sprites3 = data6.sprites;
            const img3 = sprites3.front_default;
            const evImg3 = document.createElement('img'); //create new img-element.
            evImg3.src = img3;
            document.getElementById('evoPics').appendChild(evImg3);
        }
    }
    const template = document.getElementById('pokeFound'); //make variable for the template.
    const target = document.getElementById('target'); //make variable for target.
    const clone = template.content.cloneNode(true); //make variable to clone the template.
    clone.querySelector(".name").innerText = name;
    clone.querySelector(".id").innerText = id;
    clone.querySelector(".moves").innerText = randPokeMoves;
    target.innerHTML = " "; //Right before container will be filled, empty container.
    target.appendChild(clone); //clone the template and insert it in the ol.
}



