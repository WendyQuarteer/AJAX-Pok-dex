# AJAX-Pok-dex

## Practical Information
- Repository: ajax-pokedex
- Deadline: 3 days start 23/05/2022
- Delivery: Github page (published)
- Solo challenge

## Learning Objectives
- A typical AJAX flow: send asynchronous requests to a remote server and process the results;
- JSON (JavaScript Object Notation) format;
- DOM manipulation: changing the DOM based on results of AJAX-requests.

#### Exercise
Make a Pokédex using this API.

##### Basic functionality that is expected (read: core features):
- [x] You can search a pokémon by name and by ID
Of said pokémon you need to show:
- [x] The ID-number
- [x] An image (sprite)
- [] At least 4 "moves"
- [] The previous evolution, only if it exists, along with their name and image. Be carefull, you cannot just do ID-1 
to get the previous form, for example look into "magmar" - "magmortar". You have to use a seperate api call for this!
Make your web page look like a pokédex by adding a little CSS.

Note: For this exercise, the goal is to keep working on it, until the deadline is reached. If you are finished adding 
all "core features", look at what else the API has to offer, and try adding some other features. At the end of the 
deadline, everyone is going to present the pokédex they made; As such it is important that you have published your 
web page on GitHub!

#### My steps
- [x] Make repository and add necessary files.
- [x] Look for information AJAX flow and look back at API exercises.
- [x] HTML: add an input-field and a button.
- [x] JS: add an eventlistener so the button will call the function: getData and in case
the user input can't be found, provide an error with .catch.
- [x] JS: fetch the pokeAPI and raise the limit.
- [x] JS: make variable for pokemon-Id and display in console.
- [x] JS: make variable for pokemon-name and display in console.
- [x] JS: make variable for pokemon-img and display in console. 
- [x] JS: display the array of "moves" objects in console.
- [x] JS: use map function to display a list of all moves.
- [x] JS: display 4 random moves.








##### Extra challenge

There are a couple of pokemon that don't play with the normal rules, add code so their cases are also handled elegantly.

Ditto only has 1 move.
Eevee has 6 evolutions.